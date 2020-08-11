import React from 'react';
import './Loader.css';

const Loader = () => {
	return (
		<div className="tc">
			<h1 className="tc pt7">Loading</h1>
			<p className="tc">This will just take a moment</p>
			<div className="container">
    			<div className="ball"></div>
    		</div>
		</div>
		)
}

export default Loader;