

import 'fontsource-roboto';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import img from "./kids.png"


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
                                    
                <h4>צוות אופטיקה עין טובה עומד לשרותכם, עם שנים של נסיון ומקצועיות  </h4>
                <h6>משקפי ראיה , עדשות מגע , משקפי שמש </h6>
                <h6>בדיקות ראיה לנהגים</h6>
                <p></p>

                <img alt="kids" src={img} className="rounded float-left" height="400"/> 
                <p></p>
                <div class="alert alert-primary" role="alert" />

                <div>
                    <Button variant="contained"  onClick={ nevigateToConnect } >
                    צור קשר
                    </Button>
                </div>

        </div>
        
    </div>


    );

    
}
