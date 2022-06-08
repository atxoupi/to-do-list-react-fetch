import React, { useState, useEffect } from "react";
import List from "./List.jsx";

const Card = () => {
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/andreshermelo")
			.then((response) => response.json())
			.then((data) => setLista(data));
	}, []);

	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	useEffect(() => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/andreshermelo",
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(lista),
			}
		)
			.then((resp) => {
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	}, [lista]);

	function listAdd(e) {
		e.preventDefault();
		if (tarea === "") {
			alert("El campo no puede estar vacío");
		} else {
			setLista(lista.concat(tarea));
			setTarea({ label: "", done: false });
		}
	}
	return (
		<>
			<form onSubmit={listAdd}>
				<input
					className="form-control m-auto p-3 w-50"
					onChange={(e) =>
						setTarea({ label: e.target.value, done: false })
					}
					type="text"
					value={tarea.label}
					placeholder="Default input"
					aria-label="default input example"></input>
			</form>
			<List lista={lista} setLista={setLista} />
		</>
	);
};

export default Card;
