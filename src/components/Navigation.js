import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// 1. 
import { CartContext } from './contexts/CartContext';

const Navigation = () => {
	// 2. 
	const { cart } = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				{/* // 3.  */}
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
