import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import DrinkList from '../drinks/DrinkList';
import DrinkDialog from '../drinks/DrinkDialog';
import Loading from './Loading';
import Home from './Home';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    GET_GIN_DRINKS,
    GET_RUM_DRINKS,
    GET_TEQUILA_DRINKS,
    GET_VODKA_DRINKS
} from '../../actions/types';

import { setDrinksList, setSearchList, setLogoClicked, getRequestedTabDrinks } from '../../actions/drinkAction';

const MainPage = ({ drink: { selectedTab, loading, ginList, rumList, tequilaList, vodkaList, drinksList, searchList, selectedDrink }, setDrinksList, setSearchList, setLogoClicked, getRequestedTabDrinks }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        getRequestedTabDrinks('gin', GET_GIN_DRINKS);
        getRequestedTabDrinks('rum', GET_RUM_DRINKS);
        getRequestedTabDrinks('tequila', GET_TEQUILA_DRINKS);
        getRequestedTabDrinks('vodka', GET_VODKA_DRINKS);
    }, [getRequestedTabDrinks])

    const changeCurrentnTab = (newValue) => {
        if (newValue === 'Home') {
            setLogoClicked();
        } else if (newValue === 'Gin') {
            setSearchList(ginList);
        } else if (newValue === 'Rum') {
            setSearchList(rumList);
        } else if (newValue === 'Tequila') {
            setSearchList(tequilaList);
        } else if (newValue === 'Vodka') {
            setSearchList(vodkaList);
        }
    }

    const filtereDrinks = searchField => {
        const filteredList = searchList.filter(drink => {
            return (
                drink
                    .strDrink
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        });

        if (filteredList.length === 0) {
            alert("There is no cocktail by that name", "Search Cocktail Error");
        } else {
            setDrinksList(filteredList);
        }
    }

    const cancelSearch = () => {
        setDrinksList(searchList);
    }

    const openDrinkInfo = () => {
        setOpen(true);
    }

    const closeDrinkInfo = () => {
        setOpen(false);
    };

    return (
        <div>
            <Navbar drinkList={drinksList} filtereDrinks={filtereDrinks} cancelSearch={cancelSearch} onChangeTab={changeCurrentnTab} />
            {loading && !selectedTab && <Loading loading={loading} />}
            {open && <DrinkDialog drink={selectedDrink.drinkInfo} recipe={selectedDrink.recipe} open={open} onClose={closeDrinkInfo} />
            }
            {selectedTab && <Home />}
            {!loading && !selectedTab && <DrinkList drinkList={drinksList} openDrinkInfo={openDrinkInfo} />}
        </div >
    )

}


MainPage.propTypes = {
    drink: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    drink: state.drink
})

export default connect(mapStateToProps, { setDrinksList, setSearchList, setLogoClicked, getRequestedTabDrinks })(MainPage);
