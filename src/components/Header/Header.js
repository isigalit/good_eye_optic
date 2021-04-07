import img from "./AyinTova.jpg"

export default function Header ()
{

    return(

        <header className="navbar navbar-expand-md bd-navbar bg-light justify-content-between">
            <img alt="card" src={img} height="100" />
        
            <nav className="container-xxl flex-wrap flex-md-nowrap" > 
               <div class="collapse navbar-collapse">
                <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 ">
                    <li className="nav-item col-3 col-md-auto">
                        <a className="nav-link" href="/connect">צור קשר</a>
                    </li>
                    <li className="nav-item col-3 col-md-auto">
                        <a className="nav-link" href="/about">אודות</a>
                    </li>
                    <li className="nav-item col-3 col-md-auto">
                        <a className="nav-link" href="/clalit">כללית אופטיק</a>
                    </li>
                    <li className="nav-item col-3 col-md-auto">
                        <a className="nav-link active" href="/">דף הבית</a>
                    </li>
                </ul>
                
              </div>
            </nav>

        </header>

    );

}