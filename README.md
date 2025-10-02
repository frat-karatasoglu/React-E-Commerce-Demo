# 🛍️ React E-Commerce Demo

This project is a **mini e-commerce application** I built while learning React.  
The goal was to practice component structure, props/state management, event handling, conditional rendering, API consumption, and building a modern UI with Bootstrap.

---

## 🚀 Features
- **Product List**: Dynamic products fetched from [Fake Store API](https://fakestoreapi.com/).
- **Search**: Filter products by title.
- **Category Filter**: Filter products by categories provided from API.
- **Price Sorting**: Sort products from low to high or high to low.
- **Cart System**:
  - Add / remove products
  - Manage product quantity
  - Calculate total price
  - Clear cart
- **Cart Modal**: Bootstrap modal displaying cart details.
- **Dynamic Footer**: Shows open/close status based on store hours.
- **Responsive Design**: Works on both mobile and desktop.

---

## 🛠️ Technologies Used
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/) (CSS & Modal)
- [Fake Store API](https://fakestoreapi.com/) (product data)
- ES6+ JavaScript, Hooks (`useState`, `useEffect`, `useMemo`)

---

## 📸 Screenshots

### Home Page
![Product List](./screenshots/product-list.png)

### Cart Modal
![Cart Modal](./screenshots/cart-modal.png)

---

## 📦 Installation & Running

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/react-ecommerce-demo.git
   cd react-ecommerce-demo
Install dependencies:

bash
Kodu kopyala
npm install
Start development server:

bash
Kodu kopyala
npm run dev
Open in browser:

arduino
Kodu kopyala
http://localhost:5173/
📂 Project Structure
css
Kodu kopyala
src/
  api.js
  App.jsx
  main.jsx
  index.css
  components/
    Header.jsx
    Footer.jsx
    Product.jsx
    ProductList.jsx
    CartModal.jsx
📝 Notes
StrictMode in development may trigger API fetch twice, causing an AbortError. This error is safely ignored in the code.

Product prices are provided in USD by Fake Store API and converted approximately to TL for demo purposes.

This project is for learning/demonstration purposes only.

🚀 Live Demo
