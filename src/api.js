export async function fetchProducts(signal) {
    const res = await fetch("https://fakestoreapi.com/products", { signal });
    if (!res.ok) throw new Error("Ürünler getirilemedi");
    const data = await res.json();
    return data.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        price: Math.round(Number(p.price) * 35_00) / 100,
        image: p.image,
        category: p.category,
        is_active: true
    }));
}
