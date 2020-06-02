import React, { Component } from "react";
import ContactCard from "./Contact-Card";
import "./App.css";

class App extends Component {
	render() {
		return (
			<>
				<ContactCard
					name="Jonathan Roy"
					address="281 Jefferson Ave, Staten Island, NY"
					phone="(347) 881-2201"
					work="(800) 223-1023"
					email="Jonathan.Roy@gmail.com"
				/>
				<ContactCard
					name="Alice Hempsburg"
					address="102 Michigan Ave, Staten Island, NY"
					phone="(718) 908-3891"
					work="(987) 502-7110"
					email="Alice.Hempsburg09@icloud.com"
				/>
				<ContactCard
					name="Greg Randolph"
					address="820 Hensway Ave, Staten Island, NY"
					phone="(917) 991-4022"
					work="(718) 014-4819"
					email="Greg.Randolph@yahoo.com"
				/>
				<ContactCard
					name="Sarah Thompson"
					address="921 Jefferson Ave, Staten Island, NY"
					phone="(347) 104-8562"
					work="(718) 901-7193"
					email="Sarah.Thompson00@hotmail.com"
				/>
			</>
		);
	}
}

export default App;
