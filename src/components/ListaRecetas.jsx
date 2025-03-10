import { useContext } from "react";
import Receta from "./Receta";
import { RecetasContext } from "../context/RecetasContext";

const ListaRecetas = () => {
    const { recetas } = useContext(RecetasContext);

    return (
        <div className="row mt-5">
            {recetas.map((receta) => (
                <Receta key={receta.idDrink} receta={receta} />
            ))}
        </div>
    );
};

export default ListaRecetas;
