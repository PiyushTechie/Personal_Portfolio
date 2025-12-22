
```markdown
# ⚡ Piyush Prajapati - Developer Portfolio

A high-performance, responsive personal portfolio website built with the **MERN** mindset (React + Vite) and styled with **Tailwind CSS**. It features smooth animations, a custom dark theme, and secure contact forms.

## 🚀 Features

* **🎨 Modern UI/UX:** Clean "Zinc & Sky Blue" dark theme with a glassmorphism aesthetic.
* **⚡ Blazing Fast:** Powered by **Vite**, ensuring instant HMR and optimized production builds.
* **📱 Fully Responsive:** "Zero-lag" mobile navigation and fluid layouts for all devices.
* **✨ Smooth Animations:** Powered by **Framer Motion** for scroll reveals and interactive elements.
* **🛡️ Secure Contact Form:** Integrated **EmailJS** with **Formik** validation and **Honeypot** anti-spam security.
* **🖼️ Optimized Media:** Custom Project Image Carousel with lazy loading and eager-fetch prioritization.
* **📊 Live Visitor Count:** Integrated privacy-friendly traffic analytics.

## 🛠️ Tech Stack

**Frontend:**
* ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React.js**
* ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite**
* ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS**
* ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) **Framer Motion**

**Utilities & Libraries:**
* **Lucide React:** For beautiful, lightweight icons.
* **Formik + Yup:** For robust form handling and schema validation.
* **EmailJS:** For serverless email sending.

## 🏃‍♂️ Run Locally

Clone the project

```bash
git clone [https://github.com/PiyushTechie/piyush-portfolio.git](https://github.com/PiyushTechie/piyush-portfolio.git)

```

Go to the project directory

```bash
cd piyush-portfolio

```

Install dependencies

```bash
npm install

```

Start the server

```bash
npm run dev

```

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file for the Contact Form to work:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

```

## 📂 Project Structure

```bash
public/
├── project-images/
│   ├── profile-photo/     
│   └── project-images/           
├── favicon.svg/
└── Logo.svg            
src/
├── components/
│   ├── sections/      # Hero, About, Projects, Contact, Footer
│   ├── effects/       # SpotlightCard, animations
│   └── ui/            # Reusable UI components
├── constants/         # Project data, navigation links
├── assets/            # Static images and icons
└── App.jsx            # Main entry point

```

## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub.
2. Import the repo into Vercel.
3. Add your **Environment Variables** in the Vercel dashboard.
4. Deploy!

## 📬 Contact

**Piyush Prajapati** - Full Stack Developer/MERN Stack Developer

---

© 2024 Piyush Prajapati. Built with 💙 and React.
