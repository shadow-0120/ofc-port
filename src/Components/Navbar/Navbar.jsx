import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const location = useLocation();
	const navRef = useRef(null);

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

	// Magnetic effect for nav items
	const handleMouseMove = (e, index) => {
		if (window.innerWidth <= 768) return;
		const item = e.currentTarget;
		const rect = item.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		
		item.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
	};

	const handleMouseLeave = (e) => {
		e.currentTarget.style.transform = 'translate(0, 0)';
	};

	return (
		<>
			<header 
				ref={navRef}
				className={`modern-navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}
			>
				<div className="nav-container">
					{/* Logo Section */}
					<Link to="/" className="nav-logo" aria-label="Home">
						<div className="logo-wrapper">
							<div className="logo-icon">
								<div className="logo-gradient"></div>
							</div>
							<div className="logo-text-wrapper">
								<span className="logo-name">KOUSSAI</span>
								<span className="logo-surname">MAHDI</span>
							</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="nav-menu" aria-label="Main Navigation">
						<ul className="nav-list">
							{navItems.map((item, index) => (
								<li 
									key={item.to} 
									className={`nav-item ${location.pathname === item.to ? "active" : ""}`}
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseMove={(e) => handleMouseMove(e, index)}
									onMouseLeave={(e) => {
										setHoveredIndex(null);
										handleMouseLeave(e);
									}}
								>
									<Link to={item.to} className="nav-link">
										<span className="nav-number">0{index + 1}</span>
										<span className="nav-text">{item.label}</span>
										<div className="nav-indicator"></div>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* CTA Button */}
					<div className="nav-actions">
						<Link to="/resume" className="nav-cta">
							<span>Resume</span>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
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
						<span className="menu-line"></span>
					</button>
				</div>

				{/* Background Blur Effect */}
				<div className="nav-backdrop"></div>
			</header>

			{/* Mobile Menu Overlay */}
			<div className={`mobile-menu ${open ? "active" : ""}`}>
				<div className="mobile-menu-backdrop" onClick={() => setOpen(false)}></div>
				<div className="mobile-menu-content">
					<div className="mobile-menu-header">
						<Link to="/" className="mobile-logo" onClick={() => setOpen(false)}>
							<div className="logo-wrapper">
								<div className="logo-icon">
									<div className="logo-gradient"></div>
								</div>
								<div className="logo-text-wrapper">
									<span className="logo-name">KOUSSAI</span>
									<span className="logo-surname">MAHDI</span>
								</div>
							</div>
						</Link>
					</div>
					
					<nav className="mobile-nav">
						{navItems.map((item, index) => (
							<Link
								key={item.to}
								to={item.to}
								className={`mobile-nav-item ${location.pathname === item.to ? "active" : ""}`}
								style={{ animationDelay: `${index * 0.08}s` }}
								onClick={() => setOpen(false)}
							>
								<span className="mobile-nav-number">0{index + 1}</span>
								<span className="mobile-nav-text">{item.label}</span>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</Link>
						))}
					</nav>

					<div className="mobile-menu-footer">
						<Link to="/resume" className="mobile-cta" onClick={() => setOpen(false)}>
							<span>View Resume</span>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}