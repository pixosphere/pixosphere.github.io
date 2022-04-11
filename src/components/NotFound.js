// modules
import React from "react";
import {Link, Navigate} from "react-router-dom";
import {StorageContext} from "./StorageContext";

// src

// static


const NotFound = ()=> {
	const {setCurrentPage} = React.useContext(StorageContext)
	const [redirect, setRedirect] = React.useState(null)

	React.useEffect(()=>{
		setCurrentPage('404')
	},[setCurrentPage])

	if(redirect) return <Navigate replace to={redirect} />

	return <React.Fragment>
		<div className="container-lg px-3 my-5 markdown-body">
			<h2>404 Page Not Found</h2>
			<p className="lead">
				<Link className="blank_link" to='/'>Take me home</Link>
			</p>
		</div>
	</React.Fragment>
}

export default NotFound;