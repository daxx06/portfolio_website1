import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Lead from '@/models/Lead';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        // Basic validation
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const lead = await Lead.create({
            name: body.name,
            email: body.email,
            businessType: body.businessType || 'Other',
            message: body.message,
        });

        return NextResponse.json({ success: true, data: lead }, { status: 201 });
    } catch (error) {
        console.error("Error saving lead:", error);
        return NextResponse.json({ success: false, error: 'Failed to save lead. Make sure MONGODB_URI is set.' }, { status: 500 });
    }
}
