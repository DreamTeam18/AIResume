#!/bin/bash

# AI-Resume Development Environment Setup Script
# This script initializes the development environment and starts the Next.js server

set -e  # Exit on error

echo "========================================="
echo "AI-Resume Development Setup"
echo "========================================="
echo ""

# Check for Node.js
echo "Checking for Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js $NODE_VERSION detected"
echo ""

# Check for npm
echo "Checking for npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✅ npm $NPM_VERSION detected"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed successfully"
    echo ""
else
    echo "✅ Dependencies already installed"
    echo ""
fi

# Check if .env.local exists (for future Phase 2 - Gemini API)
if [ ! -f ".env.local" ]; then
    echo "ℹ️  No .env.local file found (this is OK for Phase 1)"
    echo "   For Phase 2 (AI chat), you'll need to create .env.local with GEMINI_API_KEY"
    echo ""
fi

# Start the development server
echo "========================================="
echo "Starting Next.js Development Server"
echo "========================================="
echo ""
echo "🚀 Running: npm run dev"
echo ""
echo "The application will be available at:"
echo "   http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
echo "========================================="

npm run dev
