import React, { useState } from "react";

const List = ({ lista, setLista }) => {
	const [li, setLi] = useState("");
	function borrar(name) {
		setLista(lista.filter((item) => item !== name));
	}

	const listItems = lista.map((tarea, i) => (
		<li key={i} className="list-group-item">
			{tarea}
			<button
				type="button"
				onClick={(e) => borrar(tarea)}
				className="btn btn-outline-dark">
				X
			</button>
		</li>
	));
	return (
		<>
			<ul className="list-group">{listItems}</ul>
		</>
	);
};

export default List;
