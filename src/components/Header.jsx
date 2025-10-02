export default function Header({ cart }) {
    const count = cart.reduce((t, i) => t + i.qty, 0);
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Fırat Store</a>
                    <button className="btn btn-outline-light position-relative" data-bs-toggle="modal" data-bs-target="#cartModal">
                        🛒
                        {count > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {count}
                            </span>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}
