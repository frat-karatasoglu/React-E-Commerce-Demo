export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 20;
    const isOpen = hour >= openHour && hour < closeHour;

    return (
        <footer className="bg-dark text-light py-3 border-top mt-auto">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                <span className="small opacity-75">© 2025 Fırat Store</span>

                <span className={`badge ${isOpen ? "bg-success" : "bg-secondary"} p-2`}>
                    {isOpen
                        ? `Açık: ${closeHour}:00’a kadar sipariş alıyoruz`
                        : `Kapalı: Açılış ${openHour}:00`}
                </span>
            </div>
        </footer>
    );
}
