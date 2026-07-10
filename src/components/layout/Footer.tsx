export default function Footer() {
    return (
        <footer className="footer">
            <img
                src="images/bonita-logo.png"
                alt="Bonita National Golf Condo"
                className="footer_logo"
            />

            <h2>Bonita National Golf Condo</h2>

            <p className="footer_tagline">
                Luxury Golf Resort Rental • Bonita Springs, Florida
            </p>

            {/* <nav className="footer_links">
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to}>
                        {link.label}
                    </NavLink>
                ))}
            </nav> */}

            <p className="footer_copyright">
                <p>Your Bonita National escape awaits.</p>

                <p>See you on the fairway. ⛳</p>
            </p>
        </footer>
    );
}