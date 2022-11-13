import React,{useState} from "react"
import {InputChange} from "../../utils/TypeScript";

const LoginPass = () => {
	const initailState = {account:"",password:""};
	const [userLogin,setLogin] = useState(initailState);
	const {account,password} = userLogin;

	const [togglePasswordShow,setPasswordShow] = useState(false);

	const hendleChangeInput = (e:InputChange)=>{
		const {value,name} = e.target;
		setLogin({...userLogin,[name]:value});
	}
	return (
		<form>
		<div className="form-group mb-5">
		<label className="form-label" htmlFor="account">Email / Phone Number</label>
			<input type="text" className="form-control" name="account" id="account" value={account} onChange={hendleChangeInput}/>
		</div>
					<div className="form-group mb-5">
		<label className="form-label" htmlFor="Password">Password</label>
			<input type={togglePasswordShow?"text":"password"} name="password" className="form-control" id="Password"  value={password} onChange={hendleChangeInput}/>
						<small className="text-primary" role="button" onClick={()=>setPasswordShow(!togglePasswordShow)}>Show Password</small>
		</div>
			<button type="submit" disabled={(account && password)?false:true} className="btn btn-dark w-100">Login</button>
		</form>
	)
}

export default LoginPass;