import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import DrinkList from './drinks/DrinkList';
import DrinkDialog from './drinks/DrinkDialog';
import axios from 'axios';

const HomePage = () => {

    const [open, setOpen] = useState(false);
    const [currentDrink, setCurrentDrink] = useState({
        drinkDetails: {},
        recipe: [],
        instructions: ''
    });

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

    const handleClickOpen = (drink, recipe, instructions) => {
        setOpen(true);
        setCurrentDrink({
            drinkDetails: drink,
            recipe: recipe,
            instructions: instructions
        });
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Navbar drinkList={drinkList} filtereDrinks={filtereDrinks} cancelSearch={cancelSearch} onChangeTab={changeCurrentnTab} />
            <DrinkDialog drink={currentDrink.drinkDetails} recipe={currentDrink.recipe} instructions={currentDrink.instructions} open={open} onClose={handleClose} />
            <DrinkList drinkList={drinkList} handleClickOpen={handleClickOpen} />
        </div >
    )
}

export default HomePage;
