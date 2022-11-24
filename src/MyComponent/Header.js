import image from "./image.jfif";
import logo1 from "./email.png";
import logo2 from "./link.png";

export default function Header(){
    return(
        <>
        <img src={image}  className="head-img"/>
        <h2 className="head-text" id="head-1">Laura Smith</h2>
        <h5 className="head-text" id="head-2">Frontend Devoloper</h5>
        <h6 className="head-text" id="head-3">laurasmith.website</h6>
        <button className="head-btn" id="head-btn1"><img src={logo1} className="logo"/>Email</button>
        <button className="head-btn" id="head-btn2"><img src={logo2} className="logo" id="linke"/>Linkedin</button>
        </>
    );
}