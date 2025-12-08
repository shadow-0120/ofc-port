import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Close mobile menu on navigation and prevent body scroll
	useEffect(() => {
		setOpen(false);
		if (open) {
			document.body.classList.remove("menu-open");
		}
	}, [location.pathname]);

	// Handle body scroll when menu is open
	useEffect(() => {
		if (open) {
			document.body.classList.add("menu-open");
		} else {
			document.body.classList.remove("menu-open");
		}
	}, [open]);

	const navItems = [
		{ label: "Home", to: "/" },
		{ label: "Projects", to: "/projects" },
		{ label: "Services", to: "/services" },
		{ label: "Contact", to: "/contact" },
	];

	return (
		<>
			<header
				className={`modern-navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}
			>
				<div className="nav-container">
					{/* Logo Section */}
					<Link to="/" className="nav-logo" aria-label="Home">
						<span className="logo-text">KOUSSAI MAHDI</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="nav-menu" aria-label="Main Navigation">
						<ul className="nav-list">
							{navItems.map((item) => (
								<li key={item.to} className="nav-item">
									<Link
										to={item.to}
										className={`nav-link ${location.pathname === item.to ? "active" : ""}`}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* CTA Button */}
					<div className="nav-actions">
						<Link to="/resume" className="nav-cta">
							Resume
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className={`mobile-menu-btn ${open ? "active" : ""}`}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						onClick={() => setOpen((s) => !s)}
					>
						<span className="menu-line"></span>
						<span className="menu-line"></span>
					</button>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div className={`mobile-menu ${open ? "active" : ""}`}>
				<div className="mobile-menu-content">
					<div className="mobile-menu-header">
						<Link to="/" className="mobile-logo" onClick={() => setOpen(false)}>
							KOUSSAI MAHDI
						</Link>
						<button
							className="mobile-close-btn"
							onClick={() => setOpen(false)}
							aria-label="Close menu"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M18 6L6 18M6 6l12 12" />
							</svg>
						</button>
					</div>

					<nav className="mobile-nav">
						{navItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								className={`mobile-nav-item ${location.pathname === item.to ? "active" : ""}`}
								onClick={() => setOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<Link to="/resume" className="mobile-nav-item highlight" onClick={() => setOpen(false)}>
							Resume
						</Link>
					</nav>
				</div>
				<div className="mobile-backdrop" onClick={() => setOpen(false)}></div>
			</div>
		</>
	);
}