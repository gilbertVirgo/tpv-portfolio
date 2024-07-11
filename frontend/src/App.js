import { BrowserRouter, Route, Switch } from "react-router-dom";

import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Paintings from "./pages/Paintings";
import React from "react";
import Videos from "./pages/Videos";
import refreshMasterRef from "./prismic/refreshMasterRef";

function App() {
	React.useEffect(function () {
		refreshMasterRef();
	}, []);

	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/videos" component={Videos} />
				{/* <Route path="/paintings" component={Paintings} /> */}
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
