/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ctabg' : "url('https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financial-graph-budget-planning-future-office-room_74952-1396.jpg?t=st=1718014140~exp=1718017740~hmac=a9c89a0dad599a3abfd82224754211f042896473cf0555ec153e5ed7ae036ff3&w=996')"
      }
    },
  },
  plugins: [],
}

