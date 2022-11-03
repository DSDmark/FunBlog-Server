import React from "react";
import { useParams } from "react-router-dom";

const PageRender = ()=>{
	const param = useParams();
	console.log(param);
	return (
		<>
		<div>
		pageRender:_
		</div>
		</>
	)
}

export default PageRender;