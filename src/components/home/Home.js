import React,{useEffect,useState} from "react";
import Contact from "../contact/Contact";
import Nav from "../nav/Nav";
import "./Home.css";

const Home=()=>
{
	const [isContactModalOpen, modalToggle] = useState(false);
	const [isYT, setIsYT] = useState(false);
	useEffect(() => {
		//https://www.youtube.com/embed/FiytSAfOPzk?enablejsapi=1&origin=https://aurorafest.org
		const maindiv = document.querySelector(".container");

		function scroll() {
			maindiv.classList.toggle("get-going");
		}
		
		const container = document.getElementsByClassName("scroll-down")[0];
		document.getElementById('nav_desk_about').addEventListener("click",scroll);
		container.addEventListener("click", scroll);
		// document.getElementsByClassName("container")[0].addEventListener("click", scroll);

		let isFirefox = (/Firefox/i.test(navigator.userAgent));
		let scrollSensitivitySetting = 30;

		const pageScroll= (evt) => {
			let delta;
			if (isFirefox) {
				delta = evt.detail * (-120);
			} else {
				delta = evt.wheelDelta;
			}

			if (delta <= -scrollSensitivitySetting) {
				//Down scroll
				maindiv.classList.add("get-going");
			}
			if (delta >= scrollSensitivitySetting) {
				//Up scroll
				maindiv.classList.remove("get-going");
			}
		}

		const mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
		window.addEventListener(mousewheelEvent, pageScroll, false);

		var xDown = null;
		var yDown = null;

		function handleTouchStart(evt) {
			evt.preventDefault();
			const firstTouch = evt.changedTouches[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
		};

		function handleTouchMove(evt) {
			evt.preventDefault();
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */ 
				} else {
					/* right swipe */
				}
			} else {
				if ( yDiff > 0 ) {
					/* down swipe */
					maindiv.classList.add("get-going");
				} else { 
					/* up swipe */
					maindiv.classList.remove("get-going");
				}
			}
			/* reset values */
			xDown = null;
			yDown = null;
		};
		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchmove', handleTouchMove, false);

		return () => {
			container.removeEventListener("click", scroll);
			window.removeEventListener(mousewheelEvent, pageScroll, false);
			document.removeEventListener('touchstart', handleTouchStart, false);
			document.removeEventListener('touchmove', handleTouchMove, false);
		};
	}, []);

	// const stopYT = () => {
	// 	let player = new window.YT.Player('player', {
	// 		height: '80%',
    // 		width: '80%',
    // 		videoId: 'M7lc1UVf-VE'
	// 	});
	// 	console.log("ran");
	// 	if (window['YT'].PlayerState.PLAYING) {
	// 		console.log("ran2", player, window.YT);
	// 		player.stopVideo();
	// 	}
	// }

	// useEffect(() => {
	// 	var tag = document.createElement('script');
	// 	tag.src = 'https://www.youtube.com/iframe_api';
	// 	var firstScriptTag = document.getElementsByTagName('script')[0];
	// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	// }, []);

	return(
		<div className="container">
			<section className="main">	
			</section>
			<div className="chodu_bg">
				<Nav modalToggle={modalToggle}/>
				<section className="heading-section">
					<span className="heading">Aurora<span className="small">'20</span></span>
				</section>
				<ul className="nav_desk">
					<li className="nav_desk_desc bout" id="nav_desk_about"></li>
					<li className="nav_desk_desc" onClick={ () => {
						modalToggle(true);
						document.getElementsByClassName("chodu_bg")[0].style.display="none";
					}}>
						Contact
					</li>
				</ul>
				<span className="date">14th - 16th Feb</span>
				<span className="tagline">Ensnaring Thy Senses</span>
				<div className="logo-div">
					<svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 790.18 677.98"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M134.3,482.28a7.3,7.3,0,0,0,.82-.31c9.82-5.9,20.49-9.6,31.58-12.14a140.55,140.55,0,0,1,33.4-3.64,105.71,105.71,0,0,1,102,80.72,104.34,104.34,0,0,1,2.72,32.54,105.71,105.71,0,0,1-81.24,95.42,121.93,121.93,0,0,1-14.1,2.34c-.39,0-.78.13-1.18.2-.57.42-1.23.2-1.86.26H191c-23.4-1.38-44.67-8.61-62.62-23.95s-28.24-35.08-30.17-58.9c-.44-5.34-1.07-10.69-1.08-16a205,205,0,0,1,4.25-43.22c3.3-15.46,6.42-31,10.32-46.28C118.4,463,126,436.92,134,411c7.43-24,15.08-48,23.19-71.8,11.59-34.07,23.38-68.07,35.86-101.83,4-10.9,8-21.85,12.14-32.7a7.45,7.45,0,0,1,1.57-2.18c-.69.34-.9,1.16-1.45,1.67-5.54,5.48-11.93,9.89-18.24,14.38-31.12,22.15-63.47,42.42-95.83,62.66a132.61,132.61,0,0,0-45.35,47.67C36.09,346,31,364.59,29,384.06c-2.2,21.54-.05,42.86,4.65,63.93a207.75,207.75,0,0,0,5.93,21.87,6.19,6.19,0,0,1,.45,2.92c-.17.65-.4,1.24-1.23,1.24-1.62-.85-2.26-2.47-3-3.94C24,447.56,14.11,424.27,7.8,399.61,4,384.78,1.05,369.79.6,354.41v-3.86C.49,348.68,1,346.74,0,345v-9.55c.93-1.74.49-3.63.6-5.46v-3.69c.29-14.31,3-28.24,6.85-42,8.9-32,25.06-60,46.32-85.29,5.32-6.33,10.88-12.45,16.76-18.18,6.73-6.57,13.47-13.16,20.8-19.17,25.06-20.56,52.6-37.48,79.55-55.28,15.86-10.48,30.92-22.06,46-33.57S247,49.34,261.81,37.28Q279.36,23,296.32,7.93a76.61,76.61,0,0,1,9-6.42,9.81,9.81,0,0,1,4.26-1.2c1.06.12,2.17-.28,3.2.27a4.64,4.64,0,0,1,1.65,4.26,23.48,23.48,0,0,1-.59,4.43,55.88,55.88,0,0,1-5,13.66c-24.4,44.69-46.33,90.58-66.43,137.35q-27.62,64.23-50.71,130.22Q169.6,353,151.26,416.78c-6,20.9-11.68,41.9-16.86,63-.09.39-.14.78-.21,1.17S133.75,481.89,134.3,482.28Z" fill="#1168af"/><path d="M647.52,335c4.23,1,8.49,2,12.71,3.13a158.79,158.79,0,0,1,36.48,15.19A212.65,212.65,0,0,1,739,384.61a195.45,195.45,0,0,1,31.81,38.54,134.09,134.09,0,0,1,16.55,37.49,59.64,59.64,0,0,1,2.27,12.58c.5.75-.15,1.73.51,2.44v17.9c-.53.55-.23,1.24-.31,1.86a2.17,2.17,0,0,1-.18,1.15,66.71,66.71,0,0,1-5.09,18.92c-5.83,13.94-15.18,25.1-27.15,34.16a124.62,124.62,0,0,1-35,18.19,185.49,185.49,0,0,1-31.21,7.6,219.72,219.72,0,0,1-44,2.14,193.65,193.65,0,0,1-21.05-2.13,197.31,197.31,0,0,1-29-6.57,137.41,137.41,0,0,1-39.55-19.1c-1.2-.86-2.48-1.62-3.73-2.42a8,8,0,0,0-1.86-1.24l0,0c-20.68-15.92-31.77-37.24-34.78-62.84-2.09-17.76-.13-35.27,4.88-52.46,6.09-20.91,15.08-40.39,28.7-57.5,16.86-21.18,38.17-35.18,65.36-39.06,10.14-1.44,20.36-1.83,30.45.79A1.69,1.69,0,0,0,647.52,335Z" fill="#f3a91d"/><path d="M0,328.84a1.63,1.63,0,0,0,.6-1.47,2.11,2.11,0,0,1,.51-1.54l0,4.14c-.76.64.53,2.24-1.14,2.45Z" fill="#a0bfdd"/><path d="M0,332.42a1.73,1.73,0,0,0,.63-1.18A9.77,9.77,0,0,1,1.14,330c0,.86.05,1.73.05,2.6A3.37,3.37,0,0,1,0,335.41Z" fill="#3a80bc"/><path d="M1.13,354.53c-.61-.6-.49-1.38-.54-2.11,0-.56,0-1.13-.59-1.49v-3c1.67.22.39,1.79,1.12,2.44A21.31,21.31,0,0,1,1.13,354.53Z" fill="#adcee5"/><path d="M1.12,350.38a2,2,0,0,1-.51-1.26A1.46,1.46,0,0,0,0,347.94v-3a3.07,3.07,0,0,1,1.15,2.53C1.19,348.45,1.14,349.41,1.12,350.38Z" fill="#5898c8"/><path d="M195.67,677.45h6.09c.17.13.22.26.15.37s-.13.17-.19.17h-6c-.17-.1-.23-.2-.2-.33S195.62,677.45,195.67,677.45Z" fill="#337dba"/><path d="M309.12.57a2.73,2.73,0,0,0,0-.57h3.58c0,.19,0,.39,0,.58Z" fill="#c4d0e6"/><path d="M195.67,677.45a3.08,3.08,0,0,1,.08.53h-3c-.19-.12-.26-.24-.2-.37s.12-.19.18-.19Z" fill="#80b1d5"/><path d="M790.18,475.66c-.87-.67-.59-1.57-.51-2.44a2.94,2.94,0,0,1,.51,0Z" fill="#fadea7"/><path d="M201.72,678c0-.18,0-.36,0-.54l2.41,0q.22.19.12.36t-.18.15Z" fill="#5291c5"/><path d="M204.11,678a4.43,4.43,0,0,1,.06-.51l2.34-.05c.19.13.25.26.18.38s-.13.18-.19.18Z" fill="#90bcdc"/><path d="M789.65,495.4c-.09-.69-.2-1.38.53-1.84v1.79C790,495.61,789.85,495.62,789.65,495.4Z" fill="#f8d48f"/><path d="M192.75,677.42a2.09,2.09,0,0,1,0,.56H191c0-.19,0-.37,0-.55Z" fill="#c3e5f1"/><path d="M206.5,678a3.49,3.49,0,0,1,0-.56h1.79c0,.19,0,.38,0,.57Z" fill="#cae9f3"/><path d="M789.65,495.4a4.75,4.75,0,0,1,.53,0v1.2l-.49,0C789.68,496.18,789.67,495.79,789.65,495.4Z" fill="#fcf2db"/><path d="M368.56,17.13c.14,1,.2,1.32.21,1.6.23,9.14.39,18.29.69,27.44q.57,17.14,1.34,34.28.45,10.58,1.13,21.15c.66,10.32,1.4,20.63,2.12,30.94.45,6.35.9,12.7,1.42,19,.46,5.65,1,11.29,1.52,16.93.47,5.15.92,10.3,1.42,15.44.47,4.85,1,9.69,1.51,14.53.47,4.35.93,8.7,1.43,13.05q1,9.18,2.17,18.35,1,7.85,2,15.68c.86,6.5,1.71,13,2.66,19.49,1.05,7.28,2.14,14.55,3.34,21.81,1.63,9.9,3.38,19.78,5.09,29.67.13.78.25,1.57.4,2.35a12.3,12.3,0,0,1,.57,4.35,13.36,13.36,0,0,1-3.92,1.33c-17.58,5.06-34.81,11.15-51.88,17.71-31.55,12.13-62.4,25.88-92.88,40.46Q229.8,391.87,211,401.57c-.79.41-1.6.76-2.39,1.14-.5-.64-.2-1.2,0-1.76q7.3-25.8,15.51-51.35c17-53,36.67-105,58.49-156.25q31-72.85,67.77-143c5.37-10.21,10.83-20.36,16.53-30.39C367.28,19.19,367.75,18.45,368.56,17.13Z" fill="#2aa749"/><path d="M651.71,276.9c-4.27.18-8.54.41-12.82.52-8.45.21-16.88.83-25.31,1.44q-13.23,1-26.42,2.38c-9.88,1.06-19.75,2.23-29.59,3.57q-18.17,2.47-36.21,5.65-23,4-45.84,9.16c-7.84,1.78-15.64,3.73-23.46,5.61a1.66,1.66,0,0,1-1.3,0,90.71,90.71,0,0,1-2-9.17c-2.35-12.59-4.74-25.18-7-37.8-1.61-9.2-3-18.43-4.43-27.66-1.16-7.46-2.29-14.93-3.34-22.41-.94-6.69-1.78-13.39-2.61-20.1q-1.43-11.39-2.75-22.79c-.53-4.64-1-9.29-1.42-13.94-.53-5.34-1.07-10.68-1.54-16s-.95-10.69-1.3-16.05c-.63-9.62-1.3-19.24-1.73-28.87-.45-10.24-.9-20.47-.85-30.72L422,33.44c.73-.62-.53-2.14,1.07-2.37a365.8,365.8,0,0,0,19.13,59.19,359.69,359.69,0,0,0,47.24,82.24c20.42,26.44,44.39,49.06,72.59,67.09A272.14,272.14,0,0,0,641.53,274c3.36.86,6.75,1.61,10.13,2.41.23.1.31.21.25.33S651.78,276.9,651.71,276.9Z" fill="#cf2127"/><path d="M473.3,554.41a439.79,439.79,0,0,0-40.69-33.15,449,449,0,0,0-82.19-47.54,345.57,345.57,0,0,0-62.93-21,283.6,283.6,0,0,0-29.95-5.19c-7.31-.85-14.63-1.53-22-1.74-.36,0-.78.12-1.16-.37.3-.8,1.17-.92,1.81-1.22C245.12,440,254,435.86,263,431.83c33.36-15,67.15-28.94,101.62-41.2q18.11-6.44,36.51-12l2.29-.68c.65-.2,1.17-.08,1.41.64s.51,1.5.75,2.26q12.33,39.41,26.48,78.19c7.84,21.36,16.1,42.56,25.53,63.29a324.9,324.9,0,0,0,15.87,31,10.5,10.5,0,0,1,.49,1.08A.39.39,0,0,1,473.3,554.41Z" fill="#2aa749"/><path d="M647.52,335a1.88,1.88,0,0,1-1.69.34,63.84,63.84,0,0,0-11.2-1.11c-2.09,0-4.17,0-6.26,0a85.11,85.11,0,0,0-20.29,2.41,89.44,89.44,0,0,0-21.46,7.82,91.57,91.57,0,0,0-16.43,10.67c-3.53,2.89-7,5.85-10.22,9.08a123.59,123.59,0,0,0-11.36,13.35,159,159,0,0,0-16.86,29c-1.5,3.23-2.77,6.58-4,9.91a159.09,159.09,0,0,0-6.26,20.14,145.38,145.38,0,0,0-2.94,15.13c-.29,2.24-.22,4.55-.94,6.75a7.1,7.1,0,0,0-.11,2.07c0,6.07-.07,12.13,0,18.19a45.43,45.43,0,0,0,.72,7.08c.63,3.6,1.38,7.19,2.25,10.74a86.06,86.06,0,0,0,8.3,21.28,92.84,92.84,0,0,0,8.89,13.36,100.35,100.35,0,0,0,10.16,10.87c.43.4.94.72,1.41,1.09a8.62,8.62,0,0,1,2.83,3c-1.08,0-1.81-.76-2.64-1.27a158.68,158.68,0,0,1-20.56-15.27,191.84,191.84,0,0,1-42.35-52.36A139.33,139.33,0,0,1,472.37,441a98.69,98.69,0,0,1-2.63-21.85q0-31.89,22.66-54.3a105.28,105.28,0,0,1,25.06-18.07A156.4,156.4,0,0,1,554.8,333,192.16,192.16,0,0,1,578.86,329,182.07,182.07,0,0,1,600,327.89c14.65.14,29.14,1.65,43.28,5.73.86.24,1.7.54,2.55.81l.6.31Z" fill="#c07c2a"/><path d="M571.07,161.84c-26.56.16-47.83-21.75-47.83-47.74a47.88,47.88,0,1,1,95.76.11C618.81,141.45,596.34,162.18,571.07,161.84Z" fill="#cf2127"/><path d="M423.09,31.07a1.22,1.22,0,0,0-.61,1.13,1.71,1.71,0,0,1-.46,1.24,25.17,25.17,0,0,1,0-5.28C422.94,29.18,422.94,29.18,423.09,31.07Z" fill="#e26f73"/><path d="M552,546.12a1.77,1.77,0,0,1,1.86,1.24A2.46,2.46,0,0,1,552,546.12Z" fill="#c07c2a"/><path d="M651.71,276.9a.78.78,0,0,0-.05-.52,5.08,5.08,0,0,1,.87,0,1.64,1.64,0,0,1,.51.26c-.16.11-.3.29-.47.31A4.15,4.15,0,0,1,651.71,276.9Z" fill="#f48f92"/><path d="M134.3,482.28c-.22.35-.46.29-.55,0a1.14,1.14,0,0,1,.44-1.25C134.23,481.42,134.26,481.85,134.3,482.28Z" fill="#95b2d6"/><path d="M474.55,555c.32.22.6.48.2.82-.08.07-.46-.15-.66-.29a1.79,1.79,0,0,1-.3-.44A.44.44,0,0,1,474.55,555Z" fill="#aee4c8"/><path d="M474.55,555l-.76.09c-.17-.23-.33-.47-.49-.7l.66,0C474.33,554.45,474.46,554.72,474.55,555Z" fill="#7fd09e"/><path d="M646.43,334.74l-.6-.31A.52.52,0,0,1,646.43,334.74Z" fill="#f3a91d"/><path d="M40,476.24a6.83,6.83,0,0,1-1.17-2.39c.49-.28.5-.79.61-1.25a9.2,9.2,0,0,1,1.3,3.65A.44.44,0,0,1,40,476.24Z" fill="#3782bd"/><path d="M206,204.21l-.79-.75c.23-.67.81-1,1.51-1.52A2.46,2.46,0,0,1,206,204.21Z" fill="#bbdfee"/><path d="M40,476.24h.74c.46.25.47.7.53,1.14a.54.54,0,0,1-.1.75A3.2,3.2,0,0,1,40,476.24Z" fill="#6daad2"/><path d="M41.17,478.14c0-.25.07-.5.1-.75a3.54,3.54,0,0,1,.45.71c.09.25.09.66-.2.69S41.16,478.43,41.17,478.14Z" fill="#b0cde4"/><path d="M645.14,492.85a96.86,96.86,0,0,1,8.74-39,80,80,0,0,1,17.38-25.46,59.1,59.1,0,0,1,29.24-15.77,61.51,61.51,0,0,1,18.67-1.06,83.68,83.68,0,0,1,27.44,7.5c12.93,6,23.5,14.79,31,27A68.83,68.83,0,0,1,787.32,475c2.39,21-5.7,44.9-18.49,60.33-9.81,11.83-22,20-37,23.59a67.27,67.27,0,0,1-21,1.71,78.64,78.64,0,0,1-33.11-9.92c-17.4-9.87-27.82-24.78-31.39-44.46A67.15,67.15,0,0,1,645.14,492.85Z" fill="#fff"/><path d="M685.37,492.66a46.49,46.49,0,0,1,9-28.44,40.86,40.86,0,0,1,21.24-15.56,32.93,32.93,0,0,1,36.91,13.16,38,38,0,0,1,6.12,16.3c1.88,14-1.88,26.36-11,37.09a39,39,0,0,1-18.87,12.46,32.93,32.93,0,0,1-37.35-14.07,39,39,0,0,1-5.79-17.35C685.56,495.16,685.48,494.07,685.37,492.66Z" fill="#713e18"/></g></g></svg>         
				</div>
				<div className="trailer">
					<span onClick={() => {setIsYT(true)}}>WATCH TEASER</span>
					<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="play-circle" className="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>
				</div>
				<div className={isYT?"yt-modal open":"yt-modal"} onClick={() => {setIsYT(false)}}>
					<iframe className="player" title="Teaser" width="80%" height="80%" src="https://www.youtube.com/embed/FiytSAfOPzk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<div className="about-div">
					<p className="about">
						Aurora is the annual cultural festival of ABV-IIITM, Gwalior, an autonomous institute of Government of India. Coupled with the legacy of fellowship and pride, Aurora is one of the largest collegiate festival celebrations in central India, hence one of the most eagerly anticipated events in the institute calender. It attracts a whooping 10,000+ students from more than 70 colleges all over the country. In past, Aurora has been a festive affair to part off and an exclusive stage for the best of the artists, performers and show stoppers. Aurora'20 is ready to bewitch the hearts of the masses with an idiosyncartic blend of shimmer, mystique, stupendous talent, breathtaking performances, enrapturing panache, unnerving bands, aesthetic dance moves, soulful moves, top-notch art & sublime actors.
					</p>
				</div>
				<div className="scroll-down"></div>
				<div className="social-div">
					<a href="https://www.facebook.com/auroraiiitm" aria-label="facebook" target="_blank" rel="noopener noreferrer"><svg className="social" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
					<a href="https://www.instagram.com/aurora_iiitm/" aria-label="instagram" target="_blank" rel="noopener noreferrer"><svg className="social" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
					<a href="https://www.youtube.com/channel/UCQmbFlStfjsCRkaBvy_jPMg" aria-label="youtube" target="_blank" rel="noopener noreferrer"><svg className="social" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>
					<a href="mailto:info@aurorafest.org" aria-label="email us"><svg className="social" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg></a>
				</div>
			</div>
			<Contact modalToggle={modalToggle} isContactModalOpen={isContactModalOpen}/>
		</div>
	);
}
export default Home;