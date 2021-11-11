import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar'
import DrinkList from './drinks/DrinkList';
import axios from 'axios';

const HomePage = () => {

    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        getTequila();
    }, [])

    const getTequila = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila`)
            .then(res => {
                setDrinkList(res.data.drinks);
                console.log(res.data.drinks)
            })
    }

    return (
        <div>
            <Navbar />
            <DrinkList drinkList={drinkList} />
        </div >
    )
}

export default HomePage;
