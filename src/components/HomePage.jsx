import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import DrinkList from './drinks/DrinkList';
import axios from 'axios';

const HomePage = () => {

    const [drinkList, setDrinkList] = useState([]);
    const [allTabList, setAllTabList] = useState([]);
    const [ginList, setGinList] = useState([]);
    const [rumList, setRumList] = useState([]);
    const [tequilaList, setTequilaList] = useState([]);
    const [vodkaList, setVodkaList] = useState([]);

    useEffect(() => {
        fetchDrink('rum', setRumList);
        fetchDrink('tequila', setTequilaList);
        fetchDrink('vodka', setVodkaList);
        fetchDrink('gin', setGinList);
    }, [])

    const fetchDrink = (drink, setList) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`)
            .then(res => {
                setList(res.data.drinks);
                if (drink === 'gin') {
                    setDrinkList(res.data.drinks);
                    setAllTabList(res.data.drinks);
                }
            })
    }

    const changeCurrentnTab = (newValue) => {
        console.log(newValue);
        if (newValue === 'Gin') {
            setDrinkList(ginList);
            setAllTabList(ginList);
        } else if (newValue === 'Rum') {
            setDrinkList(rumList);
            setAllTabList(rumList);
        } else if (newValue === 'Tequila') {
            setDrinkList(tequilaList);
            setAllTabList(tequilaList);
        } else if (newValue === 'Vodka') {
            setDrinkList(vodkaList);
            setAllTabList(vodkaList);
        }
    }

    const filtereDrinks = searchField => {
        const filteredList = allTabList.filter(drink => {
            return (
                drink
                    .strDrink
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        });

        setDrinkList(filteredList);
    }

    const cancelSearch = () => {
        setDrinkList(allTabList);
    }

    return (
        <div>
            <Navbar drinkList={drinkList} filtereDrinks={filtereDrinks} cancelSearch={cancelSearch} onChangeTab={changeCurrentnTab} />
            <DrinkList drinkList={drinkList} />
        </div >
    )
}

export default HomePage;
