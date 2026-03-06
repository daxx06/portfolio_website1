"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Trash2, ExternalLink, Inbox } from "lucide-react";

type Lead = {
    _id: string;
    name: string;
    email: string;
    businessType: string;
    message: string;
    createdAt: string;
};

export default function AdminDashboardClient({ initialLeads }: { initialLeads: Lead[] }) {
    const [leads, setLeads] = useState<Lead[]>(initialLeads);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this lead?")) return;
        setIsDeleting(true);

        try {
            const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
            if (res.ok) {
                setLeads(leads.filter(l => l._id !== id));
                if (selectedLead?._id === id) setSelectedLead(null);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to delete lead");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 text-foreground">
            <div className="flex justify-between items-center mb-12 border-b-4 border-foreground pb-8">
                <div>
                    <h1 className="text-4xl font-heading uppercase text-foreground">Admin Desk</h1>
                    <p className="text-surface-dark/70 font-sans font-medium mt-2">Manage your incoming leads and inquiries.</p>
                </div>
                <div className="sticker-badge px-6 py-2 bg-warning shadow-[3px_3px_0px_0px_rgba(45,27,51,1)]">
                    {leads.length} Total Leads
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Leads List */}
                <div className="lg:col-span-1 border-4 border-foreground rounded-[2rem] bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(45,27,51,1)]">
                    <div className="bg-surface-dark text-surface-light p-6 font-heading uppercase tracking-widest border-b-4 border-foreground text-center">
                        Inbox
                    </div>
                    <div className="divide-y-4 divide-foreground max-h-[600px] overflow-y-auto">
                        {leads.length === 0 ? (
                            <div className="p-12 text-center text-surface-dark/60 font-sans font-medium flex flex-col items-center">
                                <Inbox className="w-12 h-12 mb-4 opacity-20" />
                                No leads yet. Go share your site!
                            </div>
                        ) : (
                            leads.map((lead) => (
                                <button
                                    key={lead._id}
                                    onClick={() => setSelectedLead(lead)}
                                    className={`w-full text-left p-6 transition-colors hover:bg-warning/10 ${selectedLead?._id === lead._id ? "bg-warning/20" : ""}`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-heading truncate pr-4 text-foreground text-xl">{lead.name}</h3>
                                        <span className="text-xs font-sans font-bold bg-background border-2 border-foreground px-2 py-1 rounded-full shrink-0">
                                            {format(new Date(lead.createdAt), "MMM d")}
                                        </span>
                                    </div>
                                    <p className="text-sm font-sans font-medium text-surface-dark/80 truncate">
                                        {lead.businessType}
                                    </p>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* Lead Details */}
                <div className="lg:col-span-2">
                    {selectedLead ? (
                        <div className="bg-white border-4 border-foreground rounded-[2.5rem] p-10 shadow-[8px_8px_0px_0px_rgba(45,27,51,1)] relative">
                            {/* Decorative Tape/Sticker */}
                            <div className="absolute -top-4 right-12 w-24 h-8 bg-warning rotate-3 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(45,27,51,1)]"></div>

                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-5xl font-heading mb-2">{selectedLead.name}</h2>
                                    <a href={`mailto:${selectedLead.email}`} className="text-accent hover:underline font-sans font-medium flex items-center gap-2 text-xl">
                                        {selectedLead.email} <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                                <button
                                    onClick={() => handleDelete(selectedLead._id)}
                                    disabled={isDeleting}
                                    className="p-4 bg-danger text-white rounded-full border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(45,27,51,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(45,27,51,1)] transition-all cursor-pointer disabled:opacity-50"
                                >
                                    <Trash2 className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-background border-4 border-foreground p-6 rounded-[1.5rem]">
                                    <p className="text-xs font-heading tracking-widest text-surface-dark/50 uppercase mb-2">Industry</p>
                                    <p className="font-sans font-bold text-xl">{selectedLead.businessType}</p>
                                </div>
                                <div className="bg-background border-4 border-foreground p-6 rounded-[1.5rem]">
                                    <p className="text-xs font-heading tracking-widest text-surface-dark/50 uppercase mb-2">Date Received</p>
                                    <p className="font-sans font-bold text-xl">{format(new Date(selectedLead.createdAt), "PPP p")}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-heading tracking-widest text-surface-dark/50 uppercase mb-4">Message</p>
                                <div className="bg-background border-4 border-foreground p-8 rounded-[1.5rem] font-sans font-medium text-lg leading-relaxed whitespace-pre-wrap">
                                    {selectedLead.message}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full bg-white/50 border-4 border-dashed border-foreground/20 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-24 h-24 mb-6 rounded-full bg-warning/20 flex items-center justify-center rotate-12">
                                <span className="text-4xl">💌</span>
                            </div>
                            <h3 className="text-2xl font-heading text-foreground/50 uppercase">Select a lead</h3>
                            <p className="text-surface-dark/40 font-sans font-medium mt-2">Click on a lead in the inbox to view full details here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
