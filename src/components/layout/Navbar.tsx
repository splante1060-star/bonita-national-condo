import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer } from "@mui/material";
import IconButton from '@mui/material/IconButton';

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Bonita National", to: "/about" },
    { label: "Amenities", to: "/amenities" },
    { label: "Golf Membership", to: "/membership" },
    { label: "Take the Tour", to: "/tour" },
    { label: "Golf Cart", to: "/cart" },
    { label: "Resources", to: "/resources" },
    { label: "Contact", to: "/contact" },
]
export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation();

    function handleNavClick(path: string) {
        if (pathname === path) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 8);
        }
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
            <NavLink to="/" className="navbar_logo">
                <img src="/images/bonita-logo.png" alt="Bonita National G&CC" />
                <span>Bonita National Unit 1912</span>
            </NavLink>

            <nav className="navbar_links">
                {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} onClick={() => handleNavClick(link.to)}>
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            <IconButton
                className="navbar_menu-button"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open navigation menu"
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <div className="mobile-nav">
                    <div className="mobile-nav_header">
                        <span>Menu</span>

                        <IconButton
                            onClick={() => setIsDrawerOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>

                    <nav className="mobile-nav_links">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

            </Drawer>
        </header>
    )
}