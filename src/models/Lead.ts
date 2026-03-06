import mongoose from 'mongoose';

export interface ILead extends mongoose.Document {
    name: string;
    email: string;
    businessType: string;
    message: string;
    createdAt: Date;
}

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    businessType: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
