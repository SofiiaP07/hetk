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

## Setup Phase (until 04/10/2026)

- [x] Paste logo
- [x] Change favicon to Hetk image
- [x] Add How it works page
- [x] Add Help page (FAQ + contact form)
- [ ] Connect with instagram, linkedln, facebook
- [ ] Add run of photos
- [ ] Add giraffe illustrations
- [ ] Change "Services on the guest list" to "Popular choices" with event types (wedding, birthday, corporate...)
- [ ] Link event type cards to the Gallery page
- [ ] Add legal links row + copyright
- [ ] Add giraffe on bike as contact us
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

### 30/09/2026

**Sofiia**

Completed:
- Connected website to our new domain name
- Changed commit and deployment status codes
- Changed placeholder text on About us and Team pages (written by Elizaveta)
- Added logo

Notes:
- Still need to create a galery and change event type to question type on the Contact us page

---

### 03/10/2026

**Sofiia**

Completed:
- Replaced "Event type" selection with "Question type" on the Contact Us form
- Created and integrated the new Gallery page with category filtering, search and full-screen lightbox modal

---

### 17/10/2026

**Sofiia**

Completed:
- Changed the favicon to the Hetk image
- Added the How it works page
- Added the Help page

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