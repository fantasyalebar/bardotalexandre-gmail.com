import React from 'react'
import Card from './Card'

const Categories = () => {
    const titre = "";

    return(
        <div>
            <div className="categories">
            <lINK to ="/ARTCOMPT"><Card titre="Art Comptemporain" /></lINK>
            <Card titre="Art Littéraire" />
            <Card titre="Art Graphique" />
            <Card titre="Art Spéctacle Vivant" />
            <Card titre="Art Cinématografique" />
            <Card titre="Art Graphique" />
            <Card titre="Partie Juridique" />
            </div>
        </div>
    )
}


export default Categories;