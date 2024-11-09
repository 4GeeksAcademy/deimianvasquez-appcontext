import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
	const [links, setLinks] = useState([
		{
			href: "/",
			name: "Home"
		},
		{
			href: "/todos",
			name: "Todos"
		},
		{
			href: "/rick-and-morty",
			name: "Rick And Morty"
		},
	])

	const { store } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse  justify-content-between px-3" id="navbarNavAltMarkup">
					<div className="navbar-nav" >

						{/* <NavLink
						// className="nav-link active"
						className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"}
						aria-current="page"
						to="/"
						>Home</NavLink>
						<NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/rick-and-morty">Rick And Morty</NavLink>
						<NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/todos">Todos</NavLink>
						<NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/contact">Contact</NavLink> */}
						{
							links.map((item, index) => {
								return (
									<NavLink
										key={`navlink-${index}`}
										className={({ isActive }) => isActive ? "nav-link text-danger bg-green" : "nav-link"}
										to={`${item.href}`}>{item.name}</NavLink>
								)
							})
						}

					</div>
					<div className="text-white"> <div class="dropdown">
						<a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i class="fas fa-shopping-cart"></i> {store.cart.length}
						</a>

						<ul class="dropdown-menu dropdown-menu-end" >
							{store.cart.map((item) => (
								<li key={item.id}><a class="dropdown-item" href="#">{item.name}</a></li>
							))}
							{/* <li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li> */}
						</ul>
					</div></div>
				</div>
			</div>
		</nav>
	);
};
