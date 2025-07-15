# Briefly - AI-Powered Newsletter Generator

Briefly is a React-based application that automatically generates newsletters from your social media posts using AI. It supports multiple platforms including LinkedIn, X, Instagram, and YouTube.

## Features

- **Multi-Platform Integration**: Connect your LinkedIn, X, Instagram, and YouTube accounts
- **AI-Powered Content**: Uses OpenAI GPT-4 to generate engaging newsletter content
- **Authentication**: Secure user authentication with Clerk
- **Database Storage**: Save and manage your newsletters with Supabase
- **Modern UI**: Built with React, TypeScript, Tailwind CSS, and shadcn/ui
- **Dark Mode**: Full dark mode support with theme toggle

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui components
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI GPT-4
- **Social APIs**: RapidAPI for LinkedIn and X
- **Styling**: CSS-in-JS with Tailwind

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun
- Supabase account
- Clerk account
- OpenAI API key
- RapidAPI key (for LinkedIn and X integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd briefly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Clerk Configuration
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here

   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

   # OpenAI Configuration
   VITE_OPENAI_API_KEY=your_openai_api_key

   # RapidAPI Configuration
   VITE_RAPIDAPI_KEY=your_rapidapi_key
   ```

4. **Set up Supabase Database**
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
   - Get your project URL and anon key from Settings > API

5. **Set up Clerk Authentication**
   - Create a new Clerk application
   - Get your publishable key from the Clerk dashboard
   - Configure your application settings

6. **Deploy Supabase Edge Functions**
   ```bash
   # Install Supabase CLI
   npm install -g supabase

   # Login to Supabase
   supabase login

   # Link your project
   supabase link --project-ref your_project_ref

   # Deploy functions
   supabase functions deploy scrape-socials
   supabase functions deploy transcribe
   ```

7. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:8081`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for authentication | Yes |
| `VITE_SUPABASE_URL` | Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `VITE_OPENAI_API_KEY` | OpenAI API key for AI content generation | Yes |
| `VITE_RAPIDAPI_KEY` | RapidAPI key for social media integration | Yes |

## Usage

1. **Sign In**: Use Clerk's authentication to sign in to the application
2. **Connect Social Accounts**: Add your social media profile URLs
3. **Generate Newsletter**: Click "Generate Newsletter" to create AI-powered content
4. **Save & Share**: Save your newsletters to the database or copy content for manual sharing

## API Endpoints

### Supabase Edge Functions

- `POST /functions/v1/scrape-socials`
  - Body: `{ links: string[], timeRange: string }`
  - Returns: `{ posts: Post[], newsletter: string }`

- `POST /functions/v1/transcribe`
  - Body: `{ url: string }`
  - Returns: `{ text: string }`

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT
);
```

### Newsletters Table
```sql
CREATE TABLE newsletters (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  social_links TEXT[],
  time_range TEXT,
  status TEXT CHECK (status IN ('draft', 'published'))
);
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
