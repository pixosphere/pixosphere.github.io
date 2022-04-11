import React from "react";
import axios from "axios";
import {StorageContext} from "./StorageContext";
import {Link, Navigate} from "react-router-dom";
import logo from '../images/logo.png'
import Configs from "./Configs";

function Home(){

	const {setCurrentPage} = React.useContext(StorageContext)

	const [redirect, setRedirect] = React.useState(null)
	const [visits, setVisits] = React.useState(0)
	const [collectibles, setCollectibles] = React.useState([])


	React.useEffect(()=>{
		setCurrentPage('home')
	},[setCurrentPage])

	React.useEffect(()=>{
		axios.get(`https://api.countapi.xyz/hit/${Configs.NAMESPACE}/${Configs.COUNT_API_KEY}`)
			.then(response=> setVisits(response.data.value))
			.catch(error=>console.log(error))
	},[])

	React.useEffect(()=>{
		axios.get(`${Configs.API_BASE}/collectibles.json`)
			.then(response => setCollectibles(response.data))
			.catch(error=>console.log(error))
	},[])

	if(redirect) return <Navigate replace to={redirect} />

	return <React.Fragment>

		<div className="container">

			<div className="grid-container">
				{collectibles.map((collectible,index)=> <a href={`${Configs.OPENSEA_ASSETS}/${collectible.token_id}`} className="image_link" target="_blank" rel="noreferrer">
						<div>
							<img className='grid-item grid-item-1' src={`${Configs.FILESTORE_BASE}/${collectible.file_id}.png?alt=media`} alt='NFT'/>
							<p>"{collectible.title}"</p>
						</div>
					</a>
				)}
			</div>

			<hr className="separator"/>

			<footer className="footer_area">
				<div className="footer_logo">
					<Link to="/">
						<img src={logo} height="28px" alt=""/>
					</Link>
				</div>

				<div>
					<button className="count btn btn-outline-primary" disabled={true}>
						Visits: {visits}
					</button>
				</div>
				<p className="footer-text">
					Copyright ©{new Date().getFullYear()} All rights reserved by <a href="https://opensea.io/pixosphere" className="blank_link">PixoSphere</a>
				</p>
			</footer>
		</div>
	</React.Fragment>
}
export default Home