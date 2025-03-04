import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Navigation from './Navigation/Navigation';
import CountryDropDown from "../CountryDropDown/CountryDropDown";
import SearchBox from "./SearchBox/SearchBox"; 
import {MyContext} from '../../App';

const Header = () => {
    const context = useContext(MyContext);
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              En raison des <b>vacances de Noël</b>, les commandes peuvent être traitées avec un léger retard.
            </p>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
                {
                    context.countryList.length!==0 && <CountryDropDown /> 
                }
                
                <SearchBox />

               <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle mr-3">
                    <FaRegUser />
                </Button>
                <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">3.25 € </span>
                    <div className='position-relative  ml-2'>
                        <Button className="circle ">
                            <IoBagOutline />
                        </Button>
                        <span className="count d-flex align-items-center justify-content-center">
                            1
                        </span>
                    </div>
                </div>
               

               </div>  
               


            </div>
          </div>
        </div>
      </header>
      <Navigation />
      <hr class="header-separator"></hr>
    </>
  );
};

export default Header;
