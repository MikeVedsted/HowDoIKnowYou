import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 ba b--dark-green bg-navy tc"
				type="search" 
				placeholder="Search here" 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;