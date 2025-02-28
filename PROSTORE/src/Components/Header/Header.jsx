import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Navigation from './Navigation/Navigation';
import CountryDropDown from "../CountryDropDown/CountryDropDown";

const Header = () => {
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
                <CountryDropDown />
               {/*Header Search Start Here  */}
                    <div className="headerSearch ml-3 mr-3">
                        <input type='text' placeholder="Rechercher votre produit ..." />
                        <Button>
                        <IoIosSearch />
                        </Button>
                    </div>
               {/*Header Search ends Here  */}

               <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle mr-3">
                    <FaRegUser />
                </Button>
                <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">3.25 € </span>
                    <div class='position-relative  ml-2'>
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
    </>
  );
};

export default Header;
