import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search"

const Header = () => {
	const LoginLinks = [
		{ labal: "login", path: "/login" },
		{ labal: "register", path: "/register" }
	]
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
				<div className="container-fluid">

					<Link className="navbar-brand" to={"/"}>FunBlog</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<Search />
						<ul className="navbar-nav  mb-2  ms-auto">

							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
							</li>
							{LoginLinks.map((e, i) => {
								return (
									<li key={i} className="nav-item">
										<Link className="nav-link active" aria-current="page" to={e.path}>{e.labal}</Link>
									</li>
								)
							})}

							<li className="nav-item dropdown">
								<span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									User Name
								</span>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><Link className="dropdown-item" to={"/profile"}>Profile</Link></li>
									<li><hr className="dropdown-divider" /></li>
									<li><Link className="dropdown-item" to={"/"}>Logout</Link></li>
								</ul>
							</li>

						</ul>

					</div>
				</div>
			</nav>
		</>
	)
}

export default Header;