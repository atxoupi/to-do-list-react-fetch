import React, { useState } from "react";
import List from "./List.jsx";

const Card = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);
	function listAdd(e) {
		e.preventDefault();
		if (tarea === "") {
			alert("El campo no puede estar vacío");
		} else {
			setLista(lista.concat(tarea));
			setTarea("");
		}
	}
	return (
		<>
			<form onSubmit={listAdd}>
				<input
					className="form-control m-auto p-3 w-50"
					onChange={(e) => setTarea(e.target.value)}
					type="text"
					value={tarea}
					placeholder="Default input"
					aria-label="default input example"></input>
			</form>
			<List lista={lista} setLista={setLista} />
		</>
	);
};

export default Card;
