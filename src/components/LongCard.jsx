



import React, { useState } from 'react';
// Import the CSS file

const LongCard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const products = [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/50',
            name: 'Abstract 3D',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            stock: '32 in stock',
            price: '$ 45.99',
            sales: 20,
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/50',
            name: 'Sarphens Illustration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            stock: '32 in stock',
            price: '$ 45.99',
            sales: 20,
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/50',
            name: 'Sarphens Illustration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            stock: '32 in stock',
            price: '$ 45.99',
            sales: 20,
        },
    ];

    return (
        <div className="product-sell-container">
            {/* Header */}
            <div className="header-product">
                <h2>Product Sell</h2>
                <div className="search-filter">
                    <div className="wrap-search">
                        <div className="search">
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                            <input type="text" className="searchTerm" placeholder="Search" />
                        </div>
                    </div>
                    <select>
                        <option>Last 30 days</option>
                        <option>Last 7 days</option>
                        <option>Last year</option>
                    </select>
                </div>
            </div>

            {/* Product Table Header */}
            <div className="product-table-header">
                <div>
                    <span>Product Name</span>
                </div>
                <div className='last-class-header'>
                    <span>Stock</span>
                    <span>Price</span>
                    <span>Total Sales</span>
                </div>
            </div>

            {/* Product List */}
            <div className="product-list">
                {products
                    .filter((product) =>
                        product.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((product) => (
                        <div key={product.id} className="product-item">
                            <div className="product-info">
                                <img src={product.imageUrl} alt={product.name} />
                                <div>
                                    <h4>{product.name}</h4>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            <div className='last-class-child'>
                                <span>{product.stock}</span>
                                <span><strong>{product.price}</strong></span>
                                <span>{product.sales}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default LongCard;
