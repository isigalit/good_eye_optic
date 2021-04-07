
import './Header.css';
import 'fontsource-roboto';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


export default function Home(){

    const history = useHistory()

    const nevigateToConnect = () => {
        history.push('/connect');
    }

    return (


  <div>
  <div class="container p-3 my-3 bg-primary text-white d-flex flex-column text-center" >
  <h1>אופטיקה עין טובה</h1>
  <p>אופטיקה מקצועית בכפר גנים</p>

        </div>
            <div className="d-flex flex-column text-center" >
                
                    <h1 textAlign="center">
                        <strong>
                        אופטיקה עין טובה               
                        </strong>
                    </h1> 
                    
                    <h4>
                        <em>
                        אופטיקה מקצועית בכפר גנים
                        </em>
                    </h4>
                  <p>להתייחס בכבוד לעיניים שלך </p>
                  <p>צוות אופטיקה עין טובה עומד לשרותכם, עם שנים של נסיון ומקצועיות  </p>
                  <p>משקפי ראיה , עדשות מגע , משקפי שמש </p>
                  <p>בדיקות ראיה לנהגים</p>
                  <p></p>

                  <img alt="Clalit ad" src="kids.png" className="rounded float-left" height="500"/> 

                <div>
                    <Button variant="contained"  onClick={ nevigateToConnect } >
                    צור קשר
                    </Button>
                </div>

            </div>
        
        
        </div>


    );

    
}
