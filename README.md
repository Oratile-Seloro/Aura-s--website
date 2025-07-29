# Aura's Personal Website 🌟

A stunning, modern personal portfolio website showcasing professional development, technical skills, and interactive web design. Built with vanilla HTML, CSS, and JavaScript, featuring advanced animations, responsive design, and seamless GitHub integration.

## 🚀 **Live Demo**
Visit the live website: [https://oratile-seloro.github.io]

## ✨ **What This Project Offers**

### **🎨 Modern Interactive Design**
- **Aurora Background Animations**: Mesmerizing gradient animations that create a dynamic, professional atmosphere
- **3D Tilt Effects**: Interactive profile picture and headings with realistic 3D transformations
- **Floating Particles**: Subtle animated particles that enhance the visual experience
- **Glassmorphism UI**: Modern frosted glass effects with backdrop blur for a contemporary look

### **📱 Responsive & Accessible**
- **Mobile-First Design**: Perfectly optimized for all devices from phones to desktops
- **Clean Typography**: Work Sans font integration for professional readability
- **Intuitive Navigation**: Smooth sidebar and header navigation with hover effects
- **Color-Blind Friendly**: Carefully chosen nude-brown color palette for accessibility

### **🛠️ Technical Features**
- **GitHub Integration**: Automatically fetches and displays your latest repositories
- **Interactive Folder Component**: Custom-built animated folder system for CV/documents
- **Word Hover Effects**: Engaging text interactions on the about page
- **Fallback Systems**: Works both with local backend and as static GitHub Pages site

### **💼 Professional Portfolio Components**
- **Dynamic Projects Display**: Real-time GitHub repository showcase with language tags
- **Interactive CV Section**: Animated folder system for viewing documents
- **Personal Branding**: Cohesive design reflecting technical expertise
- **Contact Integration**: Direct email and LinkedIn connectivity

## 🌟 **Key Features**
- 🏠 **Home Page**: Animated profile showcase with 3D tilt effects and professional introduction
- 👤 **About Page**: Personal story with interactive word hover effects and engaging animations
- 💻 **Projects Page**: Automatic GitHub repository integration with filtering and language display
- 📄 **CV & Degrees Page**: Interactive folder component for document viewing with magnetic hover effects
- 🎓 **Certificates Page**: Professional certification showcase (customizable)
- 🎨 **Aurora Animations**: Dynamic background gradients with floating particle effects
- 📱 **Responsive Navigation**: Collapsible sidebar and header navigation for all screen sizes
- 🔗 **Social Integration**: Direct email (mailto) and LinkedIn profile connections
- 🌈 **Consistent Theming**: Elegant nude-brown color palette throughout

## 🛠️ **Technology Stack**

### **Frontend**
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Advanced animations, glassmorphism, and responsive design
- **Vanilla JavaScript**: Interactive components, API integration, and dynamic content
- **Google Fonts**: Work Sans typography for professional appearance

### **Backend** *(Optional for local development)*
- **Node.js**: Server-side runtime for local development
- **Express.js**: Web framework for API endpoints
- **GitHub API**: Repository data fetching and integration

### **Deployment**
- **GitHub Pages**: Static hosting with automatic deployment
- **Responsive Design**: Mobile-first approach for all devices
- **Performance Optimized**: Fast loading with efficient animations

## 🎯 **Perfect For**
- **Developers** showcasing their portfolio and technical skills
- **Students** presenting academic projects and achievements  
- **Professionals** building their personal brand online
- **Anyone** wanting a modern, interactive personal website
- **Learning** advanced CSS animations and JavaScript interactions

## 🚀 **Quick Start**

### **For Visitors/Developers**
Simply visit the live website to see all features in action, or clone this repository to customize for your own use.

### **1. Local Development Setup**
```bash
# Clone the repository
git clone https://github.com/Oratile-Seloro/Aura-s--website.git
cd Aura-s--website

# Start local backend (optional)
cd backend
npm install
npm start

# Open frontend in browser
cd ../frontend
# Open index.html in your browser or use Live Server
```

### **2. GitHub Pages Deployment with GitHub Actions**

#### **✨ Automatic Deployment Setup (Recommended)**

I've created a GitHub Actions workflow that automatically deploys your `frontend/` folder to GitHub Pages whenever you push changes to the main branch.

**Step 1: Enable GitHub Pages with Actions**
1. Go to your repository: `https://github.com/Oratile-Seloro/Aura-s--website`
2. Click **"Settings"** → **"Pages"** (in left sidebar)
3. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
   - **Choose a workflow**: Select **"Static HTML"** or **"Custom"**

**Step 2: Commit the Workflow File**
A `.github/workflows/deploy.yml` file has been created in your repository. Commit and push it:

```bash
# Add the workflow file
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for automatic deployment"
git push origin main
```

**Step 3: Automatic Deployment**
- 🚀 Your site will automatically deploy whenever you push to the `main` branch
- 📍 Live URL: `https://oratile-seloro.github.io/Aura-s--website/`
- ⏱️ Deployment typically takes 2-5 minutes
- ✅ Check the "Actions" tab in your repo to monitor deployment status

#### **📋 Manual Deployment (Alternative)**
If you prefer to move files to the root directory instead:

```bash
# Navigate to repository root
cd "path/to/Aura-s--website"

# Move frontend files to root
Move-Item frontend\* . -Force
Remove-Item frontend -Recurse -Force

# Commit changes
git add .
git commit -m "Move files to root for GitHub Pages"
git push origin main

# Then enable GitHub Pages with "Deploy from branch" → "main" → "/ (root)"
```

## ⚙️ **Customization Guide**
### **📁 File Structure**
```
frontend/
├── index.html          # Home page with animated profile
├── about.html          # Personal story and background  
├── projects.html       # GitHub projects showcase
├── cv.html             # Interactive CV and degrees
├── certificates.html   # Professional certifications
├── styles.css          # Main styling and animations
├── main.js             # Interactive functionality
├── folder.js           # Custom folder component
├── folder.css          # Folder component styling
├── images/
│   ├── profile.jpg     # Your profile picture
│   └── profilepic.jpg  # Alternative profile image
├── degrees/
│   ├── cv.pdf          # Your CV document
│   ├── degree1.pdf     # BSc IT degree
│   └── degree2.pdf     # BScHons CompSci & IT
└── icons/
    ├── email-icon.svg  # Email contact icon
    └── linkedin-icon.svg # LinkedIn social icon
```

### **🎨 Personalization Steps**
1. **Replace Profile Images**: Add your photos to `frontend/images/`
2. **Update Personal Information**: Edit HTML files with your details
3. **Add Your Documents**: Place CV and certificates in `frontend/degrees/`
4. **Configure GitHub Username**: Update in `main.js` for project fetching
5. **Customize Colors**: Modify CSS variables in `styles.css` for different themes
6. **Social Links**: Update email and LinkedIn URLs in all HTML footers

### **🔧 Advanced Customization**
- **Animations**: Modify keyframes in `styles.css` for different effects
- **Interactive Elements**: Enhance `main.js` for additional functionality  
- **Color Themes**: Change CSS custom properties for different palettes
- **Content**: Customize text, add new sections, or modify existing pages

## 🌟 **Why Choose This Template?**

✅ **Professional Design** - Modern, clean, and visually appealing
✅ **Interactive Features** - Engaging animations and hover effects  
✅ **GitHub Integration** - Automatic project showcase from your repositories
✅ **Mobile Responsive** - Perfect on all devices and screen sizes
✅ **Easy to Customize** - Well-organized code with clear documentation
✅ **Performance Optimized** - Fast loading with smooth animations
✅ **Accessible Design** - Follows web accessibility best practices
✅ **No Framework Dependencies** - Pure HTML, CSS, and JavaScript

## 📊 **Browser Support**
- ✅ Chrome (80+)
- ✅ Firefox (75+)  
- ✅ Safari (13+)
- ✅ Edge (80+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 **Contributing**
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📄 **License**
This project is open source and available under the [MIT License](LICENSE).

## 👤 **Author**
**Oratile Seloro**
- 💼 Technical Operations Engineer Intern at Momentum Investments
- 🎓 BScHons Computer Science and IT - North-West University
- 📧 Email: [oratile.seloro@gmail.com](mailto:oratile.seloro@gmail.com)
- 🔗 LinkedIn: [oratile-seloro](https://www.linkedin.com/in/oratile-seloro-0b3a10246)
- 🐱 GitHub: [@Oratile-Seloro](https://github.com/Oratile-Seloro)

---

⭐ **Star this repository if you found it helpful!** ⭐

**🚀 Ready to create your own stunning personal website? Fork this repository and get started today!**
