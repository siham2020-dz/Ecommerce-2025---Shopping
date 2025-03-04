import React, { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const context = useContext(MyContext);
  const [selectedCountry, setSelectedCountry] = useState("France"); // Valeur par défaut
  const selectCountry = (index) => {
    setSelectedTab(index);
    setSelectedCountry(countryList[index].country); // Mise à jour du pays sélectionné
    setIsOpenModal(false);
  };
  

  useEffect(() => {
    if (context.countryList) {
      setCountryList(context.countryList);
    }
  }, [context.countryList]); // Ajout d'une dépendance

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    if (keyword !== "") {
      const filteredList = context.countryList?.filter((item) =>
        item.country.toLowerCase().includes(keyword)
      );
      setCountryList(filteredList || []);
    } else {
      setCountryList(context.countryList || []);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Votre localisation</span>
          <span className="name">{selectedCountry}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choisissez votre lieu de livraison</h4>
        <p>Entrez votre adresse et nous vous préciserons votre région.</p>
        <Button className="close_" onClick={() => setIsOpenModal(false)}>
          <IoIosClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Rechercher votre région ..." onChange={filterList} />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length > 0 ? (
            countryList.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectCountry(index)}
                  className={`${selectedTab === index ? "active" : ""}`}
                >
                  {item.country}
                </Button>
              </li>
            ))
          ) : (
            <li>Aucun pays trouvé</li>
          )}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
