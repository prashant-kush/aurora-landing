import React,{useEffect} from "react";
import "./contact.css";
import Card from "./card/card";
import arihant from "../../assets/gond.jpg";
import chotu from "../../assets/chotu.jpg";
import chandbhosad from "../../assets/chandu.jpg";
import rockstar from "../../assets/rockstar.jpg";

const Contact=({isContactModalOpen,modalToggle})=>
{
    useEffect(()=>{
        let isFirefox = (/Firefox/i.test(navigator.userAgent));
        const mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
        const cont = document.getElementsByClassName("contact_container")[0];
        const dummy = (event) => {event.stopPropagation()};
        cont.addEventListener(mousewheelEvent, dummy);
        cont.addEventListener('touchstart', dummy);
        cont.addEventListener('touchmove', dummy);
        return () => {
            cont.removeEventListener(mousewheelEvent, dummy);
            cont.removeEventListener('touchstart', dummy);
            cont.removeEventListener('touchmove', dummy);
        };
    });

    return(
       
            <div className={isContactModalOpen?`contact_container contact_visible`:`contact_container`} >
                <span className="cut" onClick={()=>{
                    document.getElementsByClassName("chodu_bg")[0].style.display="unset";
                    modalToggle(false);
                }}>&#x2715;</span>
                <div className="contact_heading_conatiner">
                    <h1 className="contact_heading">
                        Contact Us
                    </h1>
                </div>
                <div className="contact_card_container">
                    <Card name="Arihant Jain" designation="Coordinator" tel={9599474147} img={arihant}/>
                    <Card name="Chandan Kumar" designation="Coordinator" tel={7004727387} img={chandbhosad}/>
                    <Card name="Ojaswa Sharma" designation="Coordinator" tel={9131102279} img={chotu}/>
                    <Card name="Ruchika Agarwal" designation="Coordinator" tel={9424542227} img={rockstar}/>
                </div>
            </div>
        
    );
}
export default Contact;