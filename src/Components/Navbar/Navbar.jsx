import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);
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
		{ label: "Home", to: "/", icon: "" },
		{ label: "Projects", to: "/projects", icon: "" },
		{ label: "Services", to: "/services", icon: "" },
		{ label: "Contact", to: "/contact", icon: "" },
	];

	return (
		<>
			<header className={`classic-navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
				<div className="nav-inner">
					<Link to="/" className="logo" aria-label="Home">
						<div className="logo-emblem">
							<div className="emblem-core"></div>
							<div className="emblem-border"></div>
						</div>
						<div className="logo-text">
							<span className="logo-main">KOUSSAI</span>
							<span className="logo-sub">MAHDI</span>
						</div>
					</Link>

					<nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main Navigation">
						<ul>
							{navItems.map((item, index) => (
								<li 
									key={item.to} 
									className={`nav-item ${location.pathname === item.to ? "active" : ""}`}
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<Link to={item.to}>
										<span className="nav-icon">{item.icon}</span>
										<span className="nav-label">{item.label}</span>
										<div className="nav-underline"></div>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<button
						className={`classic-burger ${open ? "is-active" : ""}`}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						onClick={() => setOpen((s) => !s)}
					>
						<div className="burger-line top"></div>
						<div className="burger-line middle"></div>
						<div className="burger-line bottom"></div>
					</button>
				</div>

				{/* Classic Background Elements */}
				<div className="classic-background">
					<div className="nav-border"></div>
					<div className="subtle-pattern"></div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div className={`mobile-classic-menu ${open ? "active" : ""}`}>
				<div className="classic-portal">
					<div className="portal-ornament"></div>
				</div>
				
				<nav className="classic-nav">
					{navItems.map((item, index) => (
						<Link
							key={item.to}
							to={item.to}
							className={`classic-nav-item ${location.pathname === item.to ? "active" : ""}`}
							style={{ animationDelay: `${index * 0.1}s` }}
							onClick={() => setOpen(false)}
						>
							<div className="classic-item-dot"></div>
							<span className="classic-item-icon">{item.icon}</span>
							<span className="classic-item-text">{item.label}</span>
						</Link>
					))}
				</nav>

				<div className="classic-cta">
					<Link to="/resume" className="classic-resume-btn" onClick={() => setOpen(false)}>
						<span>View Resume</span>
						<div className="btn-ornament"></div>
					</Link>
				</div>
			</div>

			
		</>
	);
}