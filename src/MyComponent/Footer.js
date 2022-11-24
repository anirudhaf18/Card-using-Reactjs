import icon1 from "./twit.png"
import icon2 from "./fb.png"
import icon3 from "./insta.png"
import icon4 from "./github.png"

export default function Footer() {
    return (
        <>
            <div className="ftr">
                <img src={icon1} />
                <img src={icon2} />
                <img src={icon3} />
                <img src={icon4} />

            </div>
        </>
    );
}