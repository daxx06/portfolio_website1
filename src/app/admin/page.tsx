import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/mongoose";
import Lead from "@/models/Lead";
import AdminDashboardClient from "@/components/AdminDashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    let leads: { _id: string, name: string, email: string, businessType: string, message: string, createdAt: string }[] = [];
    try {
        // Check if MONGODB_URI is provided before connecting
        if (process.env.MONGODB_URI) {
            await dbConnect();
            const rawLeads = await Lead.find().sort({ createdAt: -1 }).lean();
            leads = rawLeads.map(lead => ({
                _id: lead._id.toString(),
                name: lead.name,
                email: lead.email,
                businessType: lead.businessType,
                message: lead.message,
                createdAt: lead.createdAt.toISOString()
            }));
        }
    } catch (error) {
        console.error("Failed to fetch leads", error);
    }

    return (
        <main className="min-h-screen bg-background">
            <AdminDashboardClient initialLeads={leads} />
        </main>
    );
}
