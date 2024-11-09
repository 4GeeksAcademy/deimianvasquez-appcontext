// getStore --> me devuelve todo el objeto store --> solo para leer store
// getActions --> me devuelve todas las acciones para usarlas
// setStore ---> (única forma de modificar el store) -->LA ÚNICAAAAA Recibe un objeto con el nuevo store
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: "Juanita",
			urlBaseTodos: "https://playground.4geeks.com/todo",
			urlBaseRick: "https://rickandmortyapi.com/api",
			todos: [],
			products: JSON.parse(localStorage.getItem("products")) || [],
			cart: []
		},
		actions: {
			getAllTask: async () => {
				try {
					const response = await fetch(`${getStore().urlBaseTodos}/users/deimian`) // <-- esto responde otro idioma
					const data = await response.json()

					if (response.ok) {
						setStore({
							todos: data.todos,
							user: data.name
						})
					}

				} catch (error) {
					console.log(error)
				}
			},
			createUser: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.urlBaseTodos}/users/deimian`, {
						method: "POST"
					})

					if (response.ok) {
						getActions().getAllTask()
					}

				} catch (error) {
					console.log(error)
				}
			},
			addTask: async (task) => {
				const store = getStore()
				try {
					const response = await fetch(`${store.urlBaseTodos}/todos/deimian`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(task)
					})
					if (response.ok) {
						getActions().getAllTask()
						return true
					}
				} catch (error) {
					console.log(error)
				}
			},
			deleteTask: async (id) => {
				const store = getStore()
				const { urlBaseTodos } = store

				try {
					const responde = await fetch(`${urlBaseTodos}/todos/${id}`, {
						method: "DELETE"
					})
					if (responde.ok) {
						getActions().getAllTask()
					}
				} catch (error) {
					console.log(error)
				}
			},
			editTask: async (item) => {
				const store = getStore()
				const { urlBaseTodos } = store

				try {
					const response = await fetch(`${urlBaseTodos}/todos/${item.id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							label: item.label,
							is_done: !item.is_done
						})
					})
					if (response.ok) {
						getActions().getAllTask()
					}
				} catch (error) {
					console.log(error)
				}
			},
			getAllCharacter: async () => {
				const store = getStore()

				if (localStorage.getItem("products")) {
					console.log("se usan los del local")
				} else {
					try {
						const response = await fetch(`${store.urlBaseRick}/character`) // otro idioma
						const data = await response.json()

						setStore({
							products: data.results
						})

						localStorage.setItem("products", JSON.stringify(store.products))

					} catch (error) {
						console.log(error)
					}
				}



			},
			addProductCart: (product) => {
				const store = getStore()

				setStore({
					cart: [...store.cart, product]
				})
			}


		}
	};
};

export default getState;
