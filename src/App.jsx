import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/Footer.jsx";
import CartModal from "./components/CartModal.jsx";
import { fetchProducts } from "./api.js";
import "./index.css";

export default function App() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const ctrl = new AbortController();

        (async () => {
            setLoading(true);
            setError("");
            try {
                const data = await fetchProducts(ctrl.signal);
                setItems(data);
            } catch (e) {
                // React StrictMode dev-double-render abort'unu yok say
                if (e?.name === "AbortError") return;
                setError(e?.message || "Bir hata oluştu");
            } finally {
                setLoading(false);
            }
        })();

        return () => ctrl.abort();
    }, []);



    const addToCart = (p) =>
        setCart((prev) => {
            const i = prev.findIndex(x => x.id === p.id);
            if (i === -1) return [...prev, { ...p, qty: 1 }];
            const next = [...prev];
            next[i] = { ...next[i], qty: next[i].qty + 1 };
            return next;
        });

    const decQty = (id) =>
        setCart((prev) => prev
            .map(x => x.id === id ? { ...x, qty: x.qty - 1 } : x)
            .filter(x => x.qty > 0));

    const removeFromCart = (id) =>
        setCart((prev) => prev.filter(x => x.id !== id));

    const clearCart = () => setCart([]);

    const total = useMemo(() =>
        cart.reduce((t, i) => t + Number(i.price) * i.qty, 0), [cart]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header cart={cart} />
            <main className="container my-4 flex-grow-1">
                <ProductList
                    items={items}
                    loading={loading}
                    error={error}
                    addToCart={addToCart}
                />
            </main>
            <Footer />
            <CartModal
                cart={cart}
                total={total}
                decQty={decQty}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
            />
        </div>
    );
}
