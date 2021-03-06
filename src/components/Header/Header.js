import img from "./AyinTova.jpg";
import { Link } from 'react-router-dom';

export default function Header ()
{

    return(

        <header className="navbar navbar-expand-md bd-navbar bg-light justify-content-between">
            <img alt="card" src={img} height="100" />
        
            <nav className="container-xxl flex-wrap flex-md-nowrap" > 
               <div class="collapse navbar-collapse">
                <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 ">
                    <li className="nav-item col-3 col-md-auto">
                        <Link className="nav-link text-primary" to="/contact">
                            צור קשר
						</Link>
                    </li>
                    <li className="nav-item col-3 col-md-auto">
                        <Link className="nav-link text-primary" to="/about">
                            אודות
						</Link>
                    </li>
                    <li className="nav-item col-3 col-md-auto">
                        <Link className="nav-link text-primary" to="/clalit">
                            כללית אופטיק    
						</Link>
                    </li>
                    <li className="nav-item col-3 col-md-auto">
                        <Link className="nav-link active text-primary" to="/">
                            דף הבית     
						</Link>
                    </li>
                </ul>
                
              </div>
            </nav>

        </header>

    );

}