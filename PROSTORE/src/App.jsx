import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import { createContext, useState, useEffect } from "react"; // Ajout de useEffect
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]); // Ajout d'une valeur par défaut

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => { // Ajout de async
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data); // Mise à jour de l'état
      console.log(response.data.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des pays :", error);
    }
  };

  const values = {
    countryList, 
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
