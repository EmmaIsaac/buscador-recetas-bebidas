import { useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    maxHeight: "95vh", // Limita la altura máxima al 95% del viewport
    overflowY: "auto", // Activa el scroll cuando el contenido supera la altura máxima
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const Receta = ({ receta }) => {
    const [open, setOpen] = useState(false);
    const { inforeceta, guardarReceta, guardarIdReceta } =
        useContext(ModalContext);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // extraer los valores del context
    const mostrarIngradientes = (inforeceta) => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (inforeceta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>
                        ${inforeceta[`strIngredient${i}`]} - $
                        {inforeceta[`strMeasure${i}`]}
                    </li>
                );
            }
        }
        return ingredientes;
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <img
                    src={receta.strDrinkThumb}
                    className="card-img-top"
                    alt={`Imagen de ${receta.strDrink}`}
                />
                <h5 className="card-header">{receta.strDrink}</h5>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();
                        }}
                    >
                        <Box sx={modalStyle}>
                            <Typography variant="h6" component="h2">
                                <h2>{inforeceta.strDrink}</h2>
                                <h3 className="mt-4">Instrucciones</h3>
                                <p>{inforeceta.strInstructions}</p>
                                <img
                                    className="img-fluid my-4"
                                    src={inforeceta.strDrinkThumb}
                                    alt={`Imagen de ${inforeceta.strDrink}`}
                                />
                                <h3>Ingredientes y cantidades</h3>
                                <ul>{mostrarIngradientes(inforeceta)}</ul>
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Receta;
