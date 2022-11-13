import React,{useState} from "react"
import LoginPass from "../components/auth/LoginPass";
import {Link} from "react-router-dom"

const Login = () => {
	const [sms,setSms] = useState(false);
	return (
		<div className="container-fluid w-50 mt-5 bg-light flex-column bd-highlight mb-3 ">
			<LoginPass/>
			<small onClick={()=>setSms(true)} className="row my-2 text-primary" role="botton">
				<Link to="/forget_password" className="col-6">Forget Password?</Link>
			</small>
			<span className="col-6">
				{sms?"Sign in with Password":"Sign in with SMS."}
			</span>
			<p>
			You Don't have an account? <Link to={`/register`}>Register Now</Link>
			</p>
		</div>
	)
}

export default Login;