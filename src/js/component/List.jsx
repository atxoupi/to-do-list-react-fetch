import React, { useState } from "react";

const List = ({ lista, setLista }) => {
	function borrar(name) {
		setLista(lista.filter((item) => item !== name));
	}

	const listItems = lista.map((tarea, i) => (
		<li key={i} className="list-group-item m-auto w-50 d-flex">
			<div className="w-100">{tarea}</div>
			<div className="d-flex justify-content-end">
				<button
					className="button"
					type="button"
					onClick={() => borrar(tarea)}
					className="btn btn-outline-danger">
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</li>
	));
	return (
		<>
			<ul className="list-group">{listItems}</ul>
		</>
	);
};

export default List;
