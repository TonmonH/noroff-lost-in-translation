const Layout = ({ children }) => {
    const storedUsername = localStorage.getItem("username");

    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-secondary">Lost in translation</a></li>
                            {storedUsername && <li><a href="/user" className="nav-link px-2 text-secondary">User settings</a></li>}
                        </ul>
                    </div>
                </div>
            </header>
            <div className="container">
                {children}
            </div>
        </div>
    )
}
export default Layout;