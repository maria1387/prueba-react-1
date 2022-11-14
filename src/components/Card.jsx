import { useEffect, useState } from "react";
import Paginacion from "./Paginacion";

const Card = ({ search }) => {
  const [coctel, setCoctel] = useState([]);
  const [porPagina] = useState (6);
  const [pagina, setPagina] = useState (1);
  const maximo = coctel.length / porPagina;

  //función para traer los datos de la API

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        // setCoctel(data.drinks);
        const sortData = data.drinks.sort((a,b) => {
          if (a.strDrink < b.strDrink) {
            return -1;
          } if (a.strDrink > b.strDrink) {
            return 1;
          }
          return 0;
        });
        setCoctel(sortData);
      });
  }, []);



  return (
    <div  >
        <Paginacion pagina={pagina} setPagina={setPagina}maximo={maximo}  />
      <div className="contenedor-articulo">
      { coctel.slice (
        (pagina - 1) * porPagina,
        (pagina - 1) * porPagina + porPagina).filter((item)=>item.strDrink.toLowerCase().includes(search.toLowerCase())).map((item) => (
          <div key={item} className="articulo">
            <img src={item.strDrinkThumb} alt="" />
            
            <div className="coctel" >
            <h4> Nombre Coctel: {item.strDrink}</h4>
            <h4> informacion de coctel: {item.strInstructions}</h4>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
        
         
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Card;
