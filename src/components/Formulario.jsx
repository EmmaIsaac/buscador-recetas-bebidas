import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
    const [busqueda, guardarBusqueda] = useState({
        nombre: "",
        categoria: "",
    });
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    // funcion para leer los contenidor
    const obtenerDatosReceta = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form
            className="col-12"
            onSubmit={(e) => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca benidas por Categoria o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {categorias.map((categoria, index) => (
                            <option key={index} value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;
