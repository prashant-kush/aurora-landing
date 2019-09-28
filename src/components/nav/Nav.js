import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = ({modalToggle}) => {
	const [navOpen, setNavOpen] = useState(false);

	useEffect(()=>{
		if(navOpen) {
			let isFirefox = (/Firefox/i.test(navigator.userAgent));
			const mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
			const cont = document.getElementsByClassName("mobile-nav")[0];
			const dummy = (event) => {event.stopPropagation()};
			cont.addEventListener(mousewheelEvent, dummy);
			cont.addEventListener('touchstart', dummy);
			cont.addEventListener('touchmove', dummy);
			return () => {
				cont.removeEventListener(mousewheelEvent, dummy);
				cont.removeEventListener('touchstart', dummy);
				cont.removeEventListener('touchmove', dummy);
			};
		}
	});

	const scroll = () => {
		const maindiv = document.querySelector(".container");
		maindiv.classList.add("get-going");
		setNavOpen(false);
	};

	return(
		<>
			<span className={navOpen?"burgers open":"burgers"} onClick={() => { setNavOpen(!navOpen) }}></span>
			<nav className={navOpen?"mobile-nav open":"mobile-nav"}>	
				<span onClick={scroll}>About</span>
				<span onClick={ () => {
					modalToggle(true);
					setNavOpen(false);
					document.getElementsByClassName("chodu_bg")[0].style.display="none";
				}}>
					Contact Us
				</span>
			</nav>
		</>
	);
};
export default Nav;