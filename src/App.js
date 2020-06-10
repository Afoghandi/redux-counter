import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { createStore } from "redux";
import { DECREASE, INCREASE, RESET } from "./actions";
import reducer from "./reducers";

//set up intia; state
const defaultState = {
	count: 76,
	name: "bob",
};

//setup store

const store = createStore(reducer, defaultState);

const App = () => {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
};

export default App;
