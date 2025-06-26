# WearClothic 👚🧥 – Full-Stack Fashion E-commerce

> A production-ready clothing store built for my final-year project. WearClothic combines a React/Tailwind front-end with a Node/Express + MongoDB back-end, complete with real-time PayPal checkout, Cloudinary image hosting, and a role-based admin dashboard.

---

## ✨ Key Highlights

| Area                 | What it Delivers                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Modern UI**        | Mobile-first layout, dark-on-light palette, polished micro-interactions, and fully responsive navigation & drawers.                              |
| **Powerful Filters** | Shoppers can refine by gender, category, size, colour, brand, material, price range, or text search – all synced to the URL for shareable links. |
| **Guest-Safe Cart**  | Every visitor gets an auto-generated guest ID. Their cart survives refreshes and merges seamlessly when they log in.                             |
| **One-click PayPal** | A secure, sandbox-ready PayPal button handles payments, then flips the order status to *Paid* and fires a confirmation e-mail.                   |
| **Image Pipeline**   | Drag-and-drop product photos → Cloudinary → optimized WebP URLs stored in MongoDB → blazing-fast delivery.                                       |
| **Admin Mode**       | A protected dashboard lets admins create / edit products, view all orders, update delivery status, and switch user roles in real time.           |

---

## 🖼️ Quick Tour

ScreenShort of Home Page:

![image](https://github.com/user-attachments/assets/536bf93f-a9ed-486d-9a5f-f3814c2d09a2)

---

## ⚙️ Tech Stack

### Front-End

* **React 18** — component framework
* **Vite** — lightning-fast dev server & bundler
* **React Router 6** — client-side routing
* **Redux Toolkit** — state slices for products, cart, auth, checkout, admin
* **Tailwind CSS** — utility-first styling
* **Heroicons & React-icons** — SVG iconography
* **Axios** — API queries & PayPal SDK integration

### Back-End

* **Express** — REST layer & middleware
* **MongoDB Atlas + Mongoose** — schema models for Users, Products, Orders, Checkout & Cart
* **JSON Web Tokens** — stateless auth, role control (*customer* vs *admin*)
* **Cloudinary SDK** — secure image upload & transformation
* **PayPal REST SDK** — server-side payment capture
* **Helmet, CORS, Rate-Limiter Flex** — production-grade security

---

## 🔐 Roles & Permissions

| Role         | Abilities                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------- |
| **Guest**    | Browse catalog, filter products, add to cart (guest ID), checkout after sign-up.               |
| **Customer** | Everything a guest can do **plus**: permanent order history, profile management, address book. |
| **Admin**    | Full data CRUD: products, users, orders, status updates & analytics cards on the dashboard.    |

---

## ⚡️ Feature Breakdown

### Front-End

1. **Sticky Navbar** with search, cart badge, profile icon and slide-in drawers.
2. **Gender Collection banners** – lazily-loaded hero images with overlay CTA.
3. **Dynamic size/colour swatches** and stock warning on product view.
4. **Smart Cart**
   
   * Quantity stepper, remove, live subtotal
   * Merges guest & customer carts on login
5. **PayPal popup** → instant order confirmation page with estimated delivery.
6. **Admin UI**
   
   * Charts for revenue & order count
   * Inline status dropdowns (*Processing → Shipped → Delivered*)
   * Image uploader (drag file → preview thumbnail → Cloudinary upload bar).

### Back-End

1. **REST endpoints** for products, auth, cart, checkout, and admin actions.
2. **Advanced query builder** supports multi-field filtering, full-text search, regex, sort & limit.
3. **Checkout pipeline**

   * Creates a “pending” Checkout record
   * On PayPal success → marks *Paid* & spawns a persistent Order entry
   * Empties the user cart and sends a transactional e-mail.
4. **Role middleware** – guards admin endpoints and hides dashboard from normal users.
5. **Robust Data Models** – embedded orderItems / checkoutItems ensure immutable snapshots.

---

## 🚀 Getting Started (local)

```bash
# 1. Clone & install
git clone https://github.com/<your-repo>/wearclothic.git
cd wearclothic
npm install            # root installs Husky hooks
cd frontend && npm i   # React packages
cd ../backend && npm i # server packages

# 2. Run both servers
npm run dev            
```

---

Here's a clean, ready-to-use `.env.example` for **both frontend and backend** of your WearClothic project. This will help others set up their environment smoothly.

---

### ✅ `backend/.env.example`

```env
# MongoDB Connection URI
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/wearclothic?retryWrites=true&w=majority

# JWT Authentication Secret
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# PayPal Configuration (Sandbox recommended for development)
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox  # or 'live' in production

# Frontend URL for CORS (change in production)
FRONTEND_URL=http://localhost:5173

# Port to run backend server
PORT= Your PORT 
```

---

### ✅ `frontend/.env.example`

```env
# Backend API base URL
VITE_API_BASE_URL=http://localhost:Your PORT/api

# PayPal Client ID (public key for frontend)
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

---

### 📌 Setup Instructions for Next User

1. **Create actual `.env` files**:

   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

2. **Replace** placeholder values with real secrets:

   * Get **Mongo URI** from MongoDB Atlas.
   * Get **Cloudinary keys** from your Cloudinary dashboard.
   * Get **PayPal sandbox keys** from [developer.paypal.com](https://developer.paypal.com/).
   * Update `FRONTEND_URL` & `VITE_API_BASE_URL` if deploying.

3. **Run the project** as usual:

   ```bash
   npm run dev
   ```

Let me know if you also want a script to generate guest user tokens or seed initial data.

---

📅 Created By

Punit Singh , Final Year B.tech Project (2025)
* **Mockups & icons**: Heroicons, Lucide-React
* **Fashion photos**: Unsplash & Pexels and etc. (royalty-free)

---

> **WearClothic** – because *what you wear* should feel as good as *how you wear it*.


