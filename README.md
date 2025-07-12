# Briefly

**Briefly** is a kewl project

---

## ✨ Features

- **AI-Powered Digest**  
  Multiple AI agents analyze your content style and sentiment to curate a personalized newsletter.

- **Your Voice, Amplified**  
  Briefly retains your unique tone, voice, and content rhythm, making the newsletter truly yours.

- **Zero Effort Publishing**  
  No writing or formatting required—just connect your socials (LinkedIn, X, Instagram, YouTube) and get your newsletter.

- **Export Anywhere**  
  Download your newsletter in PDF, HTML, or Substack-ready formats with a single click.

- **Live Newsletter Preview**  
  Instantly see how your posts are transformed into a sleek newsletter.

- **Testimonials**  
  Hear from users who love how Briefly makes their content shine.

- **Sticky Call-to-Action**  
  Encourages users to try building their first newsletter for free—no credit card required.

---

## 🚀 How It Works

1. **Connect Your Socials**  
   Link your LinkedIn, X, Instagram, and YouTube accounts.

2. **AI Analyzes Your Content**  
   Briefly's agents understand your tone, style, and key themes.

3. **Generate Your Newsletter**  
   Get a polished, professional newsletter ready to share.

---

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for validation
- [TanStack Query](https://tanstack.com/query/latest) for data fetching
- [Lucide React](https://lucide.dev/) for icons

---

## 🏁 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up Supabase:**
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Get your project URL and anon key from the project settings
   - Copy the contents of `supabase-schema.sql` and run it in your Supabase SQL editor
   
   **Configure Google OAuth:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Gmail API and Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `http://localhost:8081/auth/callback` (for development)
     - `https://yourdomain.com/auth/callback` (for production)
   - Copy the Client ID and Client Secret to your `.env` file

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # OpenAI API Key for newsletter generation
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Supabase configuration
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # AssemblyAI API Key for audio transcription
   ASSEMBLYAI_API_KEY=your_assemblyai_api_key_here
   
   # RapidAPI Key for social media scraping
   RAPIDAPI_KEY=your_rapidapi_key_here
   
   # Google OAuth for Gmail integration
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   VITE_GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   ```

4. **Deploy Edge Functions (optional - for production):**
   ```sh
   # Install Supabase CLI
   npm install -g supabase
   
   # Login to Supabase
   supabase login
   
   # Link your project
   supabase link --project-ref your_project_ref
   
   # Deploy Edge Functions
   supabase functions deploy scrape-socials
   supabase functions deploy transcribe
   ```

5. **Start the development server:**
   ```sh
   npm run dev
   ```

6. **Open your browser:**  
   Visit [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal).

---

## 📄 License

Apache License 2.0. See the [LICENSE](./LICENSE) file for details.

---

## 🙌 Credits

Built by Rishabh Sai, Vrishn Viswa , Fateen Ajaz Naqash

---

> "Where scattered thoughts become structured stories."
> — Briefly
