import React from 'react';
import { useState } from "react";

const Signin = () => {

	const login = () => {
		fetch('http://localhost:3001/users/login', {
		  	method: 'POST',
		  	headers: {
				'Content-Type': 'application/json',
		  	},
		  	body: JSON.stringify({
				email: email,
				password: password,
		  	}),
		})
	  	.then((res) => res.json())
	  	.catch((err) => console.log('error'))
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange1 = (event) => {
		setEmail(event.target.value);
	}

	const handleChange2 = (event) => {
		setPassword(event.target.value);
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		login() 
	}

    return (
        <div className="sign" align="center" style={{zIndex:"-1"}}>
            <div className='signup-form col-12 offset-0 col-lg-10 mt-3' style={{ borderRadius: "15px", boxshadow: "10px" }}>
                <form class="form" onSubmit={handleSubmit}>
			    <h2>Connection à votre compte</h2>
		            <p>Il ne vous reste plus qu'à renseigner vos informations</p>

					<div className="col-md-6 col-12">
						<hr/>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<span className="fa fa-paper-plane"></span>
									</span>                    
								</div>
								<input type="text" className="form-control" name="email" placeholder="E-mail" onChange = {handleChange1} value={email} required="required" />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fa fa-lock"></i>
									</span>                    
								</div>
								<input type="password" className="form-control" onChange = {handleChange2} value={password} placeholder="Mot de passe" required="required" />
							</div>
						</div>
					</div>
                    <div className="form-group">
                        <button type="submit" style={{ backgroundColor: "rgba(87,10,184,255)", offline: "none", border: "none" }} className="btn btn-danger btn-lg">Se connecter</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default Signin;