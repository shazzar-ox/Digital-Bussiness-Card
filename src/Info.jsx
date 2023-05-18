import React from "react";
import image from "./assets/image.png"
import emailImage from "./assets/email.png"
import linkdlnImage from "./assets/linkedin.png"
const Info = () =>
{
    return (
        <>
        <div className="main-div"> 
            <img src={image} alt="" className="my-image" />
            <div className="name-div">
                <h1>Mayowa Abikoye</h1>
                <span><h5>Full Stack and Blockchain Developer</h5></span>
                {/* <div> <a href="">website</a></div> */}
                <div className="general-btn">
                    <span>
                        <a href="mailto: emmanuelmayowa95@gmail.com">
                        
                            <button className="mail" href='heheh'><img src={emailImage} alt="" /> Email</button>
                                                     
                        </a>
                       
                    </span>

                    <span >
                        <a href="https://www.linkedin.com/in/mayowa-abikoye-9aa19365">
                             <button className="linkdln"> 
                             <img src={linkdlnImage} alt="" /> Linkdln</button>
                        </a>                        
                        
                    </span>

                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default Info