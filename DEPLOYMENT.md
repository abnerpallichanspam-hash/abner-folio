# Portfolio Website - Deployment Guide

## Project Overview

A modern, full-stack portfolio website for Abner Pallichan - Security Systems Estimator & Project Engineer.

**Tech Stack:**
- Frontend: React 19, TailwindCSS, shadcn/ui
- Backend: FastAPI, Python 3.9+
- Database: MongoDB

---

## Deployment Options

### Option 1: Frontend on Vercel + Backend Elsewhere (Recommended)

This is the simplest approach for Vercel deployment.

#### Deploy Frontend to Vercel

1. **Prepare the repository:**
   ```bash
   cd /app/frontend
   ```

2. **Update `package.json` build settings:**
   Already configured with:
   ```json
   "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test"
   }
   ```

3. **Create `vercel.json` in frontend directory:**
   ```json
   {
     "buildCommand": "yarn build",
     "outputDirectory": "build",
     "devCommand": "yarn start",
     "installCommand": "yarn install",
     "framework": "create-react-app",
     "rewrites": [
       { "source": "/(.*)", "destination": "/" }
     ]
   }
   ```

4. **Deploy to Vercel:**
   - Push code to GitHub
   - Connect repository to Vercel
   - Set environment variable: `REACT_APP_BACKEND_URL` to your backend URL
   - Deploy!

5. **For Backend:** Deploy to:
   - Railway.app
   - Render.com
   - Heroku
   - Digital Ocean App Platform
   - AWS Elastic Beanstalk

---

### Option 2: Frontend Only (Static Site)

For a completely static portfolio without backend functionality:

1. **Keep mock data in frontend**
2. **Disable contact form API calls:**
   - Revert Contact.jsx to use mailto: link instead
   - Or use a third-party form service (Formspree, Netlify Forms)

3. **Deploy to Vercel:**
   - No environment variables needed
   - Pure static site generation
   - Fastest loading times

---

### Option 3: Full-Stack on Vercel (Advanced)

Deploy both frontend and backend API on Vercel using Serverless Functions.

#### Requirements:
- MongoDB Atlas (cloud database)
- Convert FastAPI to Vercel Serverless Functions

#### Steps:

1. **Setup MongoDB Atlas:**
   - Create free cluster at mongodb.com/atlas
   - Get connection string
   - Whitelist all IPs (0.0.0.0/0) for serverless

2. **Restructure for Vercel:**
   ```
   /
   ├── api/                    # Backend serverless functions
   │   ├── index.py           # FastAPI app
   │   └── requirements.txt
   ├── public/                # Frontend static files
   ├── src/                   # Frontend source
   └── vercel.json
   ```

3. **Create `vercel.json` in root:**
   ```json
   {
     "builds": [
       {
         "src": "api/index.py",
         "use": "@vercel/python"
       },
       {
         "src": "package.json",
         "use": "@vercel/static-build"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "api/index.py"
       },
       {
         "src": "/(.*)",
         "dest": "/build/$1"
       }
     ]
   }
   ```

4. **Environment Variables in Vercel:**
   - `MONGO_URL` - Your MongoDB Atlas connection string
   - `DB_NAME` - Database name (e.g., portfolio)
   - `REACT_APP_BACKEND_URL` - Your Vercel domain

5. **Deploy:**
   ```bash
   vercel --prod
   ```

---

## Environment Variables

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### Backend (.env)
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=portfolio
```

---

## Local Development

### Prerequisites
- Node.js 18+
- Python 3.9+
- MongoDB (local or Atlas)
- Yarn

### Frontend Setup
```bash
cd frontend
yarn install
yarn start
# Runs on http://localhost:3000
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
# Runs on http://localhost:8001
```

---

## Building for Production

### Frontend
```bash
cd frontend
yarn build
# Creates optimized build in /build directory
```

### Backend
```bash
cd backend
# For Docker deployment:
docker build -t portfolio-api .
docker run -p 8001:8001 portfolio-api
```

---

## Testing

### Backend API
```bash
# Health check
curl http://localhost:8001/api/

# Submit contact form
curl -X POST http://localhost:8001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Inquiry",
    "message": "Hello!"
  }'

# Get submissions
curl http://localhost:8001/api/contact
```

---

## Recommended Deployment Architecture

```
┌─────────────────┐
│   Vercel        │
│   (Frontend)    │
│   React App     │
└────────┬────────┘
         │
         │ HTTPS
         ▼
┌─────────────────┐     ┌──────────────┐
│   Railway/      │────▶│   MongoDB    │
│   Render        │     │   Atlas      │
│   (Backend)     │     └──────────────┘
│   FastAPI       │
└─────────────────┘
```

**Benefits:**
- Frontend on Vercel: Fast CDN, automatic SSL, easy deployment
- Backend on Railway/Render: Always-on server, WebSocket support if needed
- MongoDB Atlas: Managed database, automatic backups, scalable

---

## Custom Domain Setup

1. **On Vercel:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **For Backend:**
   - Use Railway/Render custom domain feature
   - Or use a subdomain: api.yourdomain.com

3. **Update Environment Variables:**
   - Set `REACT_APP_BACKEND_URL` to your backend domain

---

## Troubleshooting

### CORS Issues
- Ensure backend allows your frontend domain in CORS settings
- Current setup allows all origins (`*`) - restrict in production

### Build Failures
- Check Node.js version matches (18+)
- Clear cache: `rm -rf node_modules && yarn install`
- Check for missing environment variables

### API Connection Issues
- Verify `REACT_APP_BACKEND_URL` is set correctly
- Check backend is running and accessible
- Verify MongoDB connection string is correct

---

## Performance Optimization

- ✅ Images lazy loading implemented
- ✅ Code splitting with React Router
- ✅ TailwindCSS purged in production
- ✅ Smooth scroll and animations optimized

---

## Security Considerations

1. **Environment Variables:** Never commit `.env` files
2. **CORS:** Restrict allowed origins in production
3. **Rate Limiting:** Consider adding to contact form endpoint
4. **MongoDB:** Use strong passwords, enable IP whitelisting
5. **HTTPS:** Always use SSL certificates (automatic on Vercel)

---

## Support & Maintenance

- Update dependencies regularly: `yarn upgrade-interactive`
- Monitor MongoDB Atlas usage
- Check Vercel analytics for performance insights
- Set up error tracking (Sentry, LogRocket)

---

## License

MIT License - Feel free to use this portfolio template for your own projects!