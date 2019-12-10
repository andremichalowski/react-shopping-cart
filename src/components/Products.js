import React, { useContext } from 'react';

// Components
import Product from './Product';
// Custom Context
import { ProductContext } from './contexts/ProductContext';

const Products = () => {
	// ??? IMPORT VALUES FROM PRODUCT CONTEXT/USE 'useContext':
	const { products, addItem } = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
