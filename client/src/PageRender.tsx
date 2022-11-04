import React, { createElement } from "react";
import { useParams, Params } from "react-router-dom";
import PageNotFound from "./components/global/PageNotFound";

const generatePage = (name: string) => {
	const component = () => require(`./pages/${name}`).default;

	try {
		return createElement(component());
	} catch (err) {
		return <PageNotFound />;
	}

}

const PageRender = () => {
	const { page, slug }: Params = useParams();
	let name: string = "";

	if (page) name = slug ? `${page}/[slug]` : `${page}`;

	return (
		<div>
			{generatePage(name)}

		</div>
	)
}

export default PageRender;