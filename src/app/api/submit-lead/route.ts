import { NextResponse, type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        const { name, email, phone } = body;
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, error: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email address.' },
                { status: 400 }
            );
        }

        // Google Apps Script Web App URL (set in .env.local)
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

        if (!GOOGLE_SCRIPT_URL) {
            // If not configured, log locally and return success
            // This allows development without Google Sheets connected
            console.log('📋 Lead received (Google Sheets not configured):', {
                timestamp: new Date().toISOString(),
                ...body,
            });
            return NextResponse.json({ success: true, message: 'Lead received.' });
        }

        // Forward to Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                timestamp: new Date().toISOString(),
                name: body.name,
                email: body.email,
                phone: body.phone,
                suburb: body.suburb || '',
                roofType: body.roofType || '',
                message: body.message || '',
                source: 'Thermal Flow Landing Page',
            }),
        });

        if (!response.ok) {
            throw new Error(`Google Apps Script error: ${response.status}`);
        }

        return NextResponse.json({ success: true, message: 'Lead submitted successfully.' });
    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to submit lead. Please try again.' },
            { status: 500 }
        );
    }
}
