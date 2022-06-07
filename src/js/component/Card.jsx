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
	function subirApi(tarea) {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/andreshermelo",
			{
				method: "PUT",
				body: [{ label: { tarea }, done: false }],
				headers: {
					"Content-Type": "application/json",
				},
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
	}
	function listAdd(e) {
		e.preventDefault();
		if (tarea === "") {
			alert("El campo no puede estar vacío");
		} else {
			subirApi(tarea);
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
