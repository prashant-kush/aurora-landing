import React,{useEffect} from "react";
import "./contact.css";
import Card from "./card/card";
import bg from "../../assets/bg.png";
const Contact=({isContactModalOpen,modalToggle})=>
{
    useEffect(()=>{
        document.getElementsByClassName("contact_container")[0].addEventListener("wheel",(event)=>{event.stopPropagation()});
    })

    return(
       
            <div className={isContactModalOpen?`contact_container contact_visible`:`contact_container`} >
                <span className="cut" onClick={()=>{
                    document.getElementsByClassName("chodu_bg")[0].style.visibility="visible"
                    modalToggle(false);
                }}>&#x2716;</span>
                <div className="contact_heading_conatiner">
                    <h1 className="contact_heading">
                        Contact Us
                    </h1>
                </div>
                <div className="contact_card_container">
                    <Card name="Arihant Jain" designation="Coordinator" tel={9599474147} img={bg}/>
                    <Card name="Chandan Kumar" designation="Coordinator" tel={7004727387} />
                    <Card name="Ojaswa Sharma" designation="Coordinator" tel={9131102279} />
                    <Card name="Ruchika Agarwal" designation="Coordinator" tel={9424542227} />
                </div>
            </div>
        
    );
}
export default Contact;