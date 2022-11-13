import React from "react";

const Footer = () => {
	return (
		<footer className="bg-secondary text-center text-white">
			<div className="container p-4 pb-0">
				<section className="">
					<form action="">
						<div className="row d-flex justify-content-center">
							<div className="col-auto">
								<p className="pt-2">
									<strong>Sign up for our newsletter</strong>
								</p>
							</div>

							<div className="col-md-5 col-12">
								<div className="form-outline form-white mb-4">
									<input type="email" id="form5Example29" className="form-control" />
									<label className="form-label" htmlFor="form5Example29">Email address</label>
								</div>
							</div>

							<div className="col-auto">
								<button type="submit" className="btn btn-outline-light mb-4">
									Subscribe
								</button>
							</div>
						</div>
					</form>
				</section>
			</div>

			<div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
				© 2020 Copyright:
				<a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
			</div>
		</footer>
	)
}

export default Footer;