// import { createContext, useContext, useState } from 'react';

// const FavContext = createContext([]);

// export const useFavContext = () => {
//     return useContext(FavContext)
// };



// const FavContextProvider = ({ children }) => {
//     const [fav, setFav] = useState([])

//     const addFav = (recetas) => {
//         let isInFav = fav.find((favItem) => favItem.id === recetas.id)

//         isInFav ? setFav([...fav]) : setFav([...fav, ...recetas])
//     };









//     return (
//         <FavContext.Provider value={{ addFav }}>

//             {children}
//         </FavContext.Provider>
//     )
// }

// export default FavContextProvider