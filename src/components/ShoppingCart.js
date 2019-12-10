import React, { useContext } from 'react';
//REFACTORING USING CONTEXT INSTEAD OF PROPS
//1. Import context
	// ^^^ A. import useContext
	// B. import CartContext >>>
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	// 2. Add useContext>>>
	const { cart } = useContext(CartContext);

	const getCartTotal = () => {
		// 3. Remove existing props
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
