import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
const Categories = () => {
  const titre = "";

  return (
    <div>
      <div className="categories">
        
          <Card titre="Art Conptemporain" class="cont" to='/Contemporain'/>
        
        <NavLink to='Littéraire'>
          <Card titre="Art Littéraire" class="litt" />
        </NavLink >
        <NavLink to='Graphique'>
          <Card titre="Art Graphique" class="grap" />
        </NavLink>
        <NavLink to='Spéctacle-Vivant'>
          <Card titre="Art Spéctacle Vivant" class="spec" />
        </NavLink>
        <NavLink to='Cinématografique'>
          <Card titre="Art Cinématografique" class="cine" />
        </NavLink>
        <NavLink to='Partie-Juridique'>
          <Card titre="Partie Juridique" class="juri" />
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
