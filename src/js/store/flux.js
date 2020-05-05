const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: []
		},
		actions: {
			setPeople: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ people: data.results }))
					.catch(error => console.log(error));
			},
			setVehicles: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(error => console.log(error));
			},
			setPlanets: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log(error));
			},
			setFavorites: (index, name) => {
				if (
					getStore()
						.favorites.map(a => a.name)
						.includes(name)
				) {
					let testArr = getStore().favorites.map(a => a.name);
					getStore().favorites.splice(testArr.indexOf(name), 1);
				} else if (
					getStore()
						.people.map(a => a.name)
						.includes(name)
				) {
					getStore().favorites.push(getStore().people[index]);
				} else if (
					getStore()
						.planets.map(a => a.name)
						.includes(name)
				) {
					getStore().favorites.push(getStore().planets[index]);
				} else if (
					getStore()
						.vehicles.map(a => a.name)
						.includes(name)
				) {
					getStore().favorites.push(getStore().vehicles[index]);
				} else {
				}
			}
		}
	};
};

export default getState;
