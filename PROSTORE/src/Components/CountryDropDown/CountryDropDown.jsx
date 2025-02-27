import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
const CountryDropdown =()=>{
    return(
        <>
       <Button className="countryDrop">
                    <div className="info d-flex flex-column">
                        <span className='label'>Votre localisation </span>
                        <span className='name'>France</span>
                    </div>
                    <span className='ml-auto'><FaAngleDown /></span>

        </Button>
        </>
    )
    }
    export default CountryDropdown;