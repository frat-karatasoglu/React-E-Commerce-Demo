import { useMemo, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList({ items, loading, error, addToCart }) {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("none"); // none | asc | desc
    const [cat, setCat] = useState("all");

    const categories = useMemo(() => ["all", ...new Set(items.map(i => i.category))], [items]);

    const filtered = useMemo(() => {
        let arr = items.filter(i =>
            i.is_active !== false &&
            i.title.toLowerCase().includes(search.toLowerCase()) &&
            (cat === "all" || i.category === cat)
        );
        if (sort === "asc") arr.sort((a, b) => a.price - b.price);
        if (sort === "desc") arr.sort((a, b) => b.price - a.price);
        return arr;
    }, [items, search, sort, cat]);

    if (loading) return <p>Ürünler yükleniyor…</p>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <>
            <div className="d-flex flex-wrap gap-2 mb-3">
                <input
                    className="form-control"
                    placeholder="Ürün ara…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ maxWidth: 300 }}
                />
                <select className="form-select w-auto" value={cat} onChange={(e) => setCat(e.target.value)}>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select className="form-select w-auto" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="none">Sıralama</option>
                    <option value="asc">Ucuzdan Pahalıya</option>
                    <option value="desc">Pahalıdan Ucuza</option>
                </select>
            </div>

            {filtered.length === 0 ? (
                <p>Eşleşen ürün bulunamadı.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
                    {filtered.map((item) => (
                        <div className="col" key={item.id}>
                            <Product productObj={item} addToCart={addToCart} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
