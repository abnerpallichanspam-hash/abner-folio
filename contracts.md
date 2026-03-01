# API Contracts & Integration Plan

## Current Mock Data Location
- `/app/frontend/src/data/mock.js` contains all portfolio data

## Backend Implementation Plan

### 1. Database Models

#### Contact Submission Model
```python
{
    "_id": ObjectId,
    "name": string,
    "email": string,
    "subject": string,
    "message": string,
    "created_at": datetime,
    "status": string  # "new", "read", "responded"
}
```

#### Project Model (Optional - for admin management)
```python
{
    "_id": ObjectId,
    "title": string,
    "company": string,
    "location": string,
    "type": string,
    "category": array[string],
    "description": string,
    "scope": string,
    "year": string,
    "image": string,
    "gallery": array[string]
}
```

### 2. API Endpoints

#### Contact Form
- **POST /api/contact** - Submit contact form
  - Input: `{ name, email, subject, message }`
  - Output: `{ success: true, message: "Message sent successfully" }`
  - Stores submission in MongoDB

#### Projects (READ-ONLY)
- **GET /api/projects** - Get all projects
  - Output: Array of project objects
  - Optional query param: `?category=Healthcare`

#### Health Check (already exists)
- **GET /api/** - Server status check

### 3. Frontend Integration Changes

#### Files to Update:
1. **Contact.jsx** - Replace mock submission with API call
2. **Projects.jsx** - (Optional) Fetch projects from backend instead of mock
3. **App.js** - Already configured with BACKEND_URL

#### Changes Required:

**Contact.jsx:**
```javascript
// Replace mock setTimeout with:
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
```

**Projects.jsx:** (Keep using mock.js for now - static portfolio data)
- No changes needed - projects are static content
- Mock data stays in place for static site generation

### 4. Environment Variables

**.env files already configured:**
- Frontend: `REACT_APP_BACKEND_URL` ✓
- Backend: `MONGO_URL` ✓

### 5. Vercel Deployment Strategy

**Two deployment options:**

#### Option A: Frontend Only (Recommended for Vercel)
- Deploy React frontend to Vercel
- Keep portfolio data static in mock.js
- Contact form posts to external API (separate backend deployment)

#### Option B: Full-Stack on Vercel
- Deploy frontend to Vercel
- Deploy FastAPI backend to Vercel Serverless Functions
- Requires MongoDB Atlas (cloud database)

### 6. Implementation Steps

1. ✅ Create backend models and routes
2. ✅ Implement contact submission API
3. ✅ Update frontend Contact.jsx to use API
4. ✅ Test backend with curl
5. ✅ Test frontend form submission
6. ✅ Create deployment documentation
7. ✅ Prepare repo for GitHub/download

### 7. What Stays Mock vs Backend

**Stays in Mock (Static):**
- Personal info
- Experience history
- Skills
- Education
- Projects data (unless you want admin panel)

**Moves to Backend:**
- Contact form submissions (stored in DB)

This approach keeps the portfolio static (fast, SEO-friendly) while making contact form functional.
