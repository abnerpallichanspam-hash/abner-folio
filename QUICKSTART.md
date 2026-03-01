# Portfolio Website

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- MongoDB
- Yarn

### Setup

1. **Frontend:**
   ```bash
   cd frontend
   yarn install
   cp .env.example .env  # Update with your backend URL
   yarn start
   ```

2. **Backend:**
   ```bash
   cd backend
   pip install -r requirements.txt
   cp .env.example .env  # Update with your MongoDB URL
   uvicorn server:app --reload --port 8001
   ```

3. **Access:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001
   - API Docs: http://localhost:8001/docs

### Deploy to Vercel

See `DEPLOYMENT.md` for detailed instructions.

**Quick Deploy:**
1. Push to GitHub
2. Import in Vercel
3. Set `REACT_APP_BACKEND_URL` environment variable
4. Deploy!

For full documentation, see `README.md`.