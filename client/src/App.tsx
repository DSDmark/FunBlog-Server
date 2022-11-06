import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PageRender from "./PageRender";

function App() {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<PageRender />} />
				<Route path="/:page" element={<PageRender />} />
				<Route path="/:page/:slug" element={<PageRender />} />
			</Routes>
		</Router>
	);
}

export default App;
