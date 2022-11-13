import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PageRender from "./PageRender";
import { Header, Footer } from "./components"

function App() {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<PageRender />} />
				<Route path="/:page" element={<PageRender />} />
				<Route path="/:page/:slug" element={<PageRender />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
