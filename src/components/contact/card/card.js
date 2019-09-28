import React from "react";
import "./card.css";
const Card=({img,name,designation,tel})=>
{
   
    return(
        <div className="card_container">
            <div className="card_image_conatiner">
                <img className="card_image" alt="coordinator" src={img}></img>
            </div>
            <div className="card_title_conatiner">
                <h2 className="card_name">{name}</h2>
                <h3 className="card_designation">{designation}</h3>
            </div>
            <div className="card_tel_container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25" fill="#000000">
                    <path d="M 39.03125 47 C 39.015625 47 39 47 38.984375 47 C 31.46875 46.753906 22.664063 39.46875 16.597656 33.398438 C 10.523438 27.328125 3.238281 18.519531 3.003906 11.039063 C 2.917969 8.414063 9.359375 3.746094 9.425781 3.699219 C 11.097656 2.535156 12.953125 2.949219 13.714844 4.003906 C 14.230469 4.71875 19.113281 12.117188 19.644531 12.957031 C 20.195313 13.828125 20.113281 15.125 19.425781 16.425781 C 19.046875 17.148438 17.789063 19.359375 17.199219 20.390625 C 17.835938 21.296875 19.519531 23.519531 22.996094 26.996094 C 26.476563 30.472656 28.695313 32.160156 29.605469 32.796875 C 30.636719 32.207031 32.847656 30.949219 33.570313 30.570313 C 34.851563 29.890625 36.140625 29.804688 37.019531 30.34375 C 37.917969 30.894531 45.296875 35.800781 45.976563 36.273438 C 46.546875 36.675781 46.914063 37.363281 46.988281 38.164063 C 47.058594 38.972656 46.808594 39.828125 46.289063 40.574219 C 46.246094 40.636719 41.632813 47 39.03125 47 Z"/>
                </svg>
                <a className="card_tel" href={`tel:+91${tel}`}>+91-{tel}</a>

            </div>
            
        </div>
    );
}
export default Card;