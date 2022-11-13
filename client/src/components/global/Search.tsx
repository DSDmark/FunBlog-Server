import React from "react";

const Search = () => {
	return (
		<>
			<form className="d-flex w-100">
				<input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-success" type="submit">Search</button>
			</form>
		</>
	)
}

export default Search;
