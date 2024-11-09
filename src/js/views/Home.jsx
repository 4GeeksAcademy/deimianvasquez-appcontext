import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

/*
	PASOS PARA USAR EL GLOBAL STATE(store)
	1.- importamos el useContext()
	2.- importamos el contexto y se lo pasamos a useContext
	3.- Destructurar el contexto para usarlo: example --> useContext(Context)
	4.- Usar el contexto
*/


export const Home = () => {

	const { store } = useContext(Context)

	console.log(store)


	return (
		<div className="text-center mt-5">
			<h1>Hello {store.user}!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
}
