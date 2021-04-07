import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailIcon from '@material-ui/icons/Mail';
import img from "./twoKids.png"


export default function Connect ()
{
    return (

        <h3>
            <p>
                <LocalPhoneIcon fontSize="Large" style={{ marginRight: '.5rem' }}/>                                   
                03-9199972
            </p>

            <p>
                <LocationOnIcon fontSize="Large" style={{ marginRight: '.5rem' }}/>                                   
                לוחמי הגטו 30, פתח תקווה
            </p>

            <div>
                <p>
                <AccessTimeIcon fontSize="Large" style={{ marginRight: '.5rem' }} />                                   
                16:00-19:00    א,ב,ד,ה  9:00-13:00
                </p>

                <div style={{ marginRight: '.10rem' }}> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ג, ו        9:00-13:00</p>
                </div>
            </div>

            <p>                
                <MailIcon fontSize="Large" style={{ marginRight: '.5rem' }}/>
                <a href="mailto:orlyborochov@gmail.com">orlyborochov@gmail.com</a>
            </p>

            <img alt="twoKids" src={img} className="rounded float-left" height="500"/> 
        </h3>

    );
}