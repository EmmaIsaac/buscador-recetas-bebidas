import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    // State del context
    const [categorias, guardarCategorias] = useState([]);

    // Ejecutar el llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const categorias = await axios.get(
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            );
            guardarCategorias(categorias.data.drinks);
        };
        consultarAPI();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias,
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
};
export default CategoriasProvider;
