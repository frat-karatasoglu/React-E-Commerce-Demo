export default function CartModal({ cart, total, decQty, removeFromCart, clearCart }) {
    return (
        <div className="modal fade" id="cartModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Sepetiniz</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                    </div>

                    <div className="modal-body">
                        {cart.length === 0 ? (
                            <p>Sepet boş.</p>
                        ) : (
                            <ul className="list-group">
                                {cart.map((item) => (
                                    <li key={item.id} className="list-group-item d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <img src={item.image} alt={item.title} width="40" height="40" className="rounded border" />
                                            <div>
                                                <div className="fw-semibold">{item.title}</div>
                                                <small className="text-muted">{item.price} TL</small>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-2">
                                            <button className="btn btn-sm btn-outline-secondary" onClick={() => decQty(item.id)}>-</button>
                                            <span className="px-2">{item.qty}</span>
                                            <button className="btn btn-sm btn-outline-secondary" onClick={() => (/* addToCart-like */) => { }}>
                                                {/* Yerine App'te addToCart(item) gönderip burada kullanmak istersen prop ekleyebilirsin */}
                                            </button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>Kaldır</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="modal-footer d-flex justify-content-between">
                        <strong>Toplam: {total} TL</strong>
                        <div className="d-flex gap-2">
                            <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Kapat</button>
                            <button className="btn btn-danger" onClick={clearCart} disabled={cart.length === 0}>Sepeti Temizle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
