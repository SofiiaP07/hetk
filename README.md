# Hetk - All-in-One Event Planning Marketplace

## Project Description

Hetk is an all-in-one event planning marketplace where users can organize events by finding and booking services such as venues, photographers, caterers, and other event providers.

Users can:
- Create events
- Set budgets and dates
- Search and filter services
- View provider profiles
- Book services
- Communicate through chats
- Receive notifications

---

# 🚀 Current Todo List

## Setup Phase (until 04/11/2026)

- [ ] Connect domain
- [ ] Change the text on the pages - about + contacts
- [ ] Add page galery
- [ ] Event type --> question type
- [ ] About us: history, mission/vision/values(values = very important)
- [ ] Connect with instagram, linkedln, facebook
- [ ] Paste logo
- [ ] Do different color schemes for web-site

---

# 📅 Development Log

## August 2026

### 05/08/2026

**Sofiia**

Completed:
- Created GitHub repository
- Set up React project with Vite
- Connected React application with Supabase
- Tested database connection

Notes:
- Supabase RLS permissions were configured during testing.
- Need to finalize database structure.

---

### 08/08/2026

**Sofiia**

Completed:
- Set up React Router and built the basic site structure (Navbar, Footer, page routing)
- Built Home, About Us, Team, and Contact pages
- Designed a visual system for the site (ticket/event-program theme: fonts, colors, ticket-stub cards) in `index.css`
- Added a working contact form (local state, ready to be wired to Supabase)
- Fixed a bug where the scroll position carried over between pages when navigating (added `ScrollToTop` component)

Notes:
- Contact form currently only logs submissions to the console — needs a Supabase table (e.g. `contact_requests`) and an `insert` call to actually save messages.

---

# ⚠️ Problems & Solutions

## Problem: 
All text fields are currently place holders.

## Problem: 
What about styling?

---

# Git Commit Rules

Use clear commit messages:

Examples:

✅ Add authentication system  
✅ Connect Supabase database  
✅ Create event page  
✅ Fix booking form validation  

Avoid:

❌ update  
❌ changes  
❌ stuff  
❌ final version (it never is)