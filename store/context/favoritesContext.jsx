import {useState} from "react";
import {createContext} from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})
function FavoritesContextProvider({children}){
    const [favoriteMeals, setFavoriteMeals] = useState([])

    function addFavorite(id){
        setFavoriteMeals(prevState => [...prevState, id])
    }

    function removeFavorite(id){
        setFavoriteMeals((prevMeals) => {
            return prevMeals.filter(mealId => mealId !== id)
        })
    }

    const value = {
        ids: favoriteMeals,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContextProvider