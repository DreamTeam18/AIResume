# AI-Resume

A modern, animated portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, light/dark theme switching, and showcases developer projects and skills.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Animations**: Framer Motion for smooth, professional animations
- **Theme System**: Light/dark mode with localStorage persistence
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance Optimized**: Next.js Image optimization, lazy loading
- **Accessible**: Keyboard navigation, ARIA labels, proper contrast

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git for version control

## 🛠️ Setup & Installation

### Quick Start

Run the initialization script:

```bash
chmod +x init.sh
./init.sh
```

This will:
1. Check for Node.js and npm
2. Install all dependencies
3. Start the development server at http://localhost:3000

### Manual Setup

If you prefer to set up manually:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
ai-resume/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with memoji
│   ├── About.tsx         # About/bio section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills grid
│   ├── Contact.tsx       # Contact/social links
│   └── ThemeToggle.tsx   # Theme switcher
├── config/               # Configuration files
│   ├── profile.ts        # Personal information
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills data
│   └── contact.ts        # Contact information
├── lib/                  # Utility functions
├── public/               # Static assets (images, fonts)
├── init.sh              # Setup script
└── README.md            # This file
```

## 🎨 Customization

To personalize your portfolio:

1. **Update Profile**: Edit `config/profile.ts` with your name, bio, etc.
2. **Add Projects**: Modify `config/projects.ts` with your projects
3. **Update Skills**: Edit `config/skills.ts` with your tech stack
4. **Contact Info**: Change `config/contact.ts` with your social links
5. **Add Images**: Place your memoji/photos in `public/images/`

## 🎯 Development Phases

### Phase 1: Portfolio Frontend (Current)
- ✅ Project setup with Next.js, TypeScript, Tailwind
- 🔄 Header with navigation and theme toggle
- 🔄 Hero section with animated memoji
- 🔄 About section with bio
- 🔄 Projects section with cards
- 🔄 Skills section with icons
- 🔄 Contact section with social links
- 🔄 Responsive design for all devices
- 🔄 Smooth scroll animations

### Phase 2: AI Chat Integration (Future)
- ⏳ Google Gemini API integration
- ⏳ Interactive memoji chat assistant
- ⏳ Chat modal with streaming responses
- ⏳ Session management

## 🧪 Testing

Features are tracked in a SQLite database (`features.db`) with 50 comprehensive tests covering:

- Infrastructure (5 tests)
- Navigation and Header (9 tests)
- Hero Section (7 tests)
- Theme System (6 tests)
- About Section (3 tests)
- Projects Section (7 tests)
- Skills Section (6 tests)
- Contact Section (6 tests)
- Performance (1 test)

## 📦 Dependencies

### Production
- `next`: ^14.2.0 - React framework
- `react` & `react-dom`: ^18.3.0 - UI library
- `framer-motion`: ^11.0.0 - Animation library
- `lucide-react`: ^0.309.0 - Icon library

### Development
- `typescript`: ^5 - Type safety
- `tailwindcss`: ^3.4.0 - Styling
- `eslint`: ^8 - Code linting

## 🚢 Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

Or use the Vercel GitHub integration for automatic deployments.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Update this section in `config/profile.ts` with your information.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
