import img1 from './img/1.png'
import { Link } from "react-router-dom";

export function Front() {
    return (
        <>
            <div className="container">
                <Link to='/back' className='link'> hello</Link>
                <img src={img1} className="img" alt="." />
            </div>
        </>
    )
}