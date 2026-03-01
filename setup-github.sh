#!/bin/bash

# Portfolio Website - GitHub Repository Setup Script

echo "========================================="
echo "Portfolio Website - GitHub Setup"
echo "========================================="
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    echo "Error: Please run this script from the project root directory"
    exit 1
fi

echo "Step 1: Initializing Git repository..."
git init

echo ""
echo "Step 2: Adding files to Git..."
git add .

echo ""
echo "Step 3: Creating initial commit..."
git commit -m "Initial commit: Full-stack portfolio website

- Frontend: React 19, TailwindCSS, shadcn/ui
- Backend: FastAPI, MongoDB
- Features: Contact form, project showcase, responsive design
- Ready for Vercel deployment"

echo ""
echo "========================================="
echo "Git repository initialized successfully!"
echo "========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Create a new repository on GitHub"
echo "2. Run these commands:"
echo ""
echo "   git remote add origin <your-github-repo-url>"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import your GitHub repository"
echo "   - Set REACT_APP_BACKEND_URL environment variable"
echo "   - Deploy!"
echo ""
echo "For detailed deployment instructions, see DEPLOYMENT.md"
echo ""
