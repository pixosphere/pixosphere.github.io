import React from "react";
import logo from '../images/logo.png'
import fineLogo from '../images/opensea.svg'
import {Link} from "react-router-dom";
import {StorageContext} from "./StorageContext";

function Nav(){
	const {currentPage} = React.useContext(StorageContext)

	return(
		<nav className="navbar navbar-expand-lg navbar-light fixed-top">
			<div className="container">
				<Link className="navbar-brand logo_h nav-logo" to="/"><img src={logo} height="32px" alt=""/></Link>
				{currentPage!=="404" &&
					<div>
						<a className="navbar-brand logo_h nav-logo" href="https://opensea.io/collection/pixosphere" target="_blank" rel="noreferrer">
							<img src={fineLogo} alt="" height={'40px'}/>
						</a>
					</div>
				}
			</div>
		</nav>
	)
}

export default Nav