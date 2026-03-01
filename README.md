# Portfolio Website - Abner Pallichan

A modern, full-stack portfolio website showcasing professional experience in security systems estimation and project engineering.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Features

- **Modern Design:** Clean, professional aesthetic with custom cursor effects
- **Responsive:** Fully responsive across all devices
- **Interactive Projects:** Filterable project showcase with detailed modal views
- **Contact Form:** Functional contact form with MongoDB storage
- **Smooth Animations:** Engaging scroll animations and transitions
- **SEO Optimized:** Semantic HTML and proper meta tags

## 🛠️ Tech Stack

### Frontend
- React 19
- TailwindCSS
- shadcn/ui components
- Axios
- React Router
- Lucide React (icons)

### Backend
- FastAPI
- Python 3.9+
- Motor (async MongoDB driver)
- Pydantic

### Database
- MongoDB

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── ui/ (shadcn components)
│   │   ├── data/
│   │   │   └── mock.js
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── contracts.md
├── DEPLOYMENT.md
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and Yarn
- Python 3.9+
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   yarn install
   ```

3. **Backend Setup:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Environment Variables:**

   Create `frontend/.env`:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

   Create `backend/.env`:
   ```env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=portfolio
   ```

### Running Locally

1. **Start Backend:**
   ```bash
   cd backend
   uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   yarn start
   ```

3. **Open Browser:**
   Navigate to `http://localhost:3000`

## 📦 Building for Production

### Frontend
```bash
cd frontend
yarn build
```

This creates an optimized production build in the `build/` directory.

### Backend
```bash
cd backend
# Run with production settings
uvicorn server:app --host 0.0.0.0 --port 8001
```

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel (Frontend)
- Railway/Render (Backend)
- MongoDB Atlas (Database)

### Quick Deploy to Vercel

1. Push to GitHub
2. Import repository in Vercel
3. Set `REACT_APP_BACKEND_URL` environment variable
4. Deploy!

## 🎨 Customization

### Update Personal Information

Edit `frontend/src/data/mock.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  // ...
};
```

### Update Projects

Modify the `projects` array in `frontend/src/data/mock.js`.

### Change Colors

Update the color scheme in:
- `frontend/tailwind.config.js` (font families)
- Component files (search for `#b8936a`, `#0f0f10`, etc.)

### Modify Sections

Components are modular - edit any component in `frontend/src/components/` to customize.

## 🧪 Testing

### Backend API Tests
```bash
# Health check
curl http://localhost:8001/api/

# Submit contact form
curl -X POST http://localhost:8001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Hi","message":"Hello"}'
```

## 📱 Features Breakdown

### Hero Section
- Name and role display
- Professional bio
- Key statistics (experience, projects)
- CTA buttons
- Smooth scroll indicator

### About Section
- Professional background
- Education details
- Contact information
- Professional image

### Experience Section
- Company timeline
- Role descriptions
- Key achievements
- Company images

### Projects Section
- Project cards with images
- Category filtering (All, Healthcare, Security, Aged Care)
- Detailed modal views
- Image galleries
- Project information (company, location, scope, year)

### Skills Section
- Categorized skills
- Estimating & Commercial
- Systems & Technical
- Software & Tools
- Professional Skills

### Contact Section
- Contact information
- Functional contact form
- Form validation
- Success/error notifications

## 🔒 Security

- Email validation on both frontend and backend
- CORS configured (update for production)
- Environment variables for sensitive data
- MongoDB connection secured

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Abner Pallichan**
- Email: abnerpallichan@gmail.com
- Location: London, United Kingdom

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Lucide](https://lucide.dev/) for icons
- [Unsplash](https://unsplash.com/) for stock images

---

**Made with ❤️ using React & FastAPI**