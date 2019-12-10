import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { ProductContext } from './components/contexts/ProductContext';
import { CartContext } from './components/contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">

			{/* PRODUCT CONTEXT PROVIDER */}
			<ProductContext.Provider value={{ products, addItem }}>

				{/* CART CONTEXT PROVIDER */}
				<CartContext.Provider value={{cart}}>

					<Navigation cart={cart} />

					{/* ROUTES */}
				
						<Route
							exact path="/" 
							render={() => (<Products component={Products} />)}
						/>

						<Route
							path="/cart"
							render={() => <ShoppingCart cart={cart} />}
						/>

				</CartContext.Provider>

			</ProductContext.Provider>

		</div>
	);
}

export default App;
