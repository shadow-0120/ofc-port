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
			<header className={`cosmic-navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
				<div className="nav-inner">
					<Link to="/" className="logo" aria-label="Home">
						<div className="logo-orb">
							<div className="orb-core"></div>
							<div className="orb-glow"></div>
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
										<span className="nav-label">{item.label}</span>
										<div className="nav-underline"></div>
										<div className="nav-glow"></div>
									</Link>
								</li>
							))}
						</ul>

						
					</nav>

					<button
						className={`hologram-burger ${open ? "is-active" : ""}`}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						onClick={() => setOpen((s) => !s)}
					>
						<div className="hologram-line top"></div>
						<div className="hologram-line middle"></div>
						<div className="hologram-line bottom"></div>
						<div className="hologram-glow"></div>
					</button>
				</div>

				{/* Animated Background Elements */}
				<div className="cosmic-background">
					<div className="nebula"></div>
					<div className="floating-particles">
						{Array.from({ length: 15 }).map((_, i) => (
							<div key={i} className="particle"></div>
						))}
					</div>
					<div className="energy-grid"></div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div className={`mobile-cosmic-menu ${open ? "active" : ""}`}>
				<div className="cosmic-portal">
					<div className="portal-ring outer"></div>
					<div className="portal-ring middle"></div>
					<div className="portal-ring inner"></div>
					<div className="portal-core"></div>
				</div>
				
				<nav className="cosmic-nav">
					{navItems.map((item, index) => (
						<Link
							key={item.to}
							to={item.to}
							className={`cosmic-nav-item ${location.pathname === item.to ? "active" : ""}`}
							style={{ animationDelay: `${index * 0.1}s` }}
							onClick={() => setOpen(false)}
						>
							<div className="cosmic-item-orb"></div>
							<span className="cosmic-item-icon">{item.icon}</span>
							<span className="cosmic-item-text">{item.label}</span>
							<div className="cosmic-item-trail"></div>
						</Link>
					))}
				</nav>

				<div className="cosmic-cta">
					<Link to="/resume" className="cosmic-resume-btn" onClick={() => setOpen(false)}>
						<span>View Resume</span>
						<div className="quantum-ripple"></div>
					</Link>
				</div>
			</div>
		</>
	);
}