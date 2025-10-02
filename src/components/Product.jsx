export default function Product({ productObj, addToCart }) {
    if (!productObj || productObj.is_active === false) return null;

    return (
        <div className="card shadow-sm h-100">
            <img className="card-img-top p-2 p-md-3 border-bottom" src={productObj.image} alt={productObj.title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{productObj.title}</h5>
                <p className="card-text text-muted">{productObj.description}</p>
                <div className="mt-auto">
                    <span className="badge bg-success fs-6">{productObj.price} TL</span>
                    <button className="btn btn-primary btn-sm w-100 mt-2" onClick={() => addToCart(productObj)}>
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </div>
    );
}
