# WebX Digital Agency

A premium, high-converting digital agency portfolio website built for modern businesses. Inspired by top-tier SaaS design, this website features a dark cyber-aesthetic, fluid 3D React Three Fiber backgrounds, Framer Motion scroll reveals, and a complete backend for lead generation and administration.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Custom Dark Theme & Glassmorphism)
- **Animations:** Framer Motion
- **3D Visuals:** React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- **Database:** MongoDB (via Mongoose)
- **Authentication:** NextAuth.js
- **Icons:** Lucide React

## 📂 Project Structure

- `src/app/page.tsx`: Main landing page combining all sections.
- `src/components/*`: All modular architectural UI components (Hero, Services, Pricing, Contact, etc.)
- `src/app/admin/page.tsx`: Secured NextAuth dashboard to manage collected leads.
- `src/app/api/*`: Next.js Route handlers for authentication and MongoDB CRUD operations.
- `src/models/Lead.ts`: Mongoose schema for the contact form leads.

## 💻 Getting Started Locally

1. **Clone the repository** (or download the files).
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # MongoDB Connection String (e.g. from MongoDB Atlas)
   MONGODB_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/webx"

   # Secure secret for NextAuth sessions (generate with `openssl rand -base64 32`)
   NEXTAUTH_SECRET="your_secure_random_string_here"
   NEXTAUTH_URL="http://localhost:3000"

   # Admin Dashboard Credentials
   ADMIN_EMAIL="admin@webx.com"
   ADMIN_PASSWORD="admin123"
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the website. Navigate to `/admin` to test the admin dashboard.

## ☁️ Deployment (Vercel)

This project is highly optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and create a New Project.
3. Import the GitHub repository.
4. **Crucial Step:** In the Vercel project settings, explicitly define the following Environment Variables before deploying:
   - `MONGODB_URI`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (set this to your production URL, e.g. `https://your-domain.com`)
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
5. Click **Deploy**. Vercel will automatically build the Next.js App Router project and allocate serverless functions for the API routes.

## 🎨 Customization
- **Theme Variables:** Colors, fonts, and spacing are defined in `tailwind.config.ts` and `src/app/globals.css`.
- **3D Models:** The 3D shapes can be configured by modifying the `Sphere` and `MeshDistortMaterial` parameters in `src/components/Hero.tsx`.
