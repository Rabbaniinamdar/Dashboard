import React from 'react';
import './CSS/RecentOrders.css';
import { HiOutlineSearch } from 'react-icons/hi';

const recentOrderData = [
	{
		id: 1,
		product: 'Abstract 3D',
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
		img: "https://cdn.dribbble.com/users/3113477/screenshots/15486362/media/79e3f6d4e2dbc768de3b13fae67db58c.jpg?resize=800x600&vertical=center",
		stock: 23,
		Price: 50,
		Salse: 500,
	},
	{
		id: 2,
		product: 'Surpheanse Illustration',
		description: "Vivid and colorful digital artwork for your home decor.",
		img: 'https://i.pinimg.com/736x/6b/08/66/6b0866fb768840a801b875bb8201e313.jpg',
		stock: 15,
		Price: 40,
		Salse: 600,
	},
	{
		id: 3,
		product: 'Sculpture',
		description: "Handcrafted sculpture with intricate details.",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTmWPMknnvGc59FYaPfIeCzZqL94g27MAnA&usqp=CAU",
		stock: 8,
		Price: 120,
		Salse: 960,
	},
	{
		id: 4,
		product: 'Oil Painting',
		description: "A classic oil painting featuring a scenic landscape.",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRX3ezFisp9bjo5SKUbk0vy_BSaet0TZHitg&usqp=CAU",
		stock: 5,
		Price: 80,
		Salse: 400,
	},
	{
		id: 5,
		product: 'Photography Print',
		description: "High-quality photography prints of natural wonders.",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjOc7zoVOxGkaTnmWgYKMakZSPn4gqeRtFw&usqp=CAU",
		stock: 30,
		Price: 35,
		Salse: 1050,
	},
];

export default function RecentOrders() {
	return (
	  <div className="recent-orders-container">
		<div className="recent-orders-heading">
		  <h2>Product Sell</h2>
		  <div className="search-product">
			<HiOutlineSearch className="search-product-icon" />
			<input
			  type="text"
			  placeholder="Search..."
			  className="search-product-input"
			/>
		  </div>
		  <div className="select-days">
			<select name="days" id="days">
			  <option value="30">Last 30 days</option>
			  <option value="50">Last 40 days</option>
			  <option value="80">Last 80 days</option>
			</select>
		  </div>
		</div>
		<div className="recent-orders-table">
		  <table>
			  <tr>
				<th colSpan={2}>Product Name</th>
				<th colSpan={4}></th>
				<th>Stock</th>
				<th>Price</th>
				<th>Total Sales</th>
			  </tr>
			<tbody>
			  {recentOrderData.map((order) => (
				<tr key={order.id}>
				  <td colSpan={2}>
					<div className="product-info">
					  <img
						src={order.img}
						alt=""
						width={50}
						height={25}
					  />
					  <div className="product-details">
						<p>{order.product}</p>
						<p>{order.description}</p>
					  </div>
					</div>
				  </td>
				  <td colSpan={4}></td>
				  <td>{order.stock} in stock</td>
				  <td><strong>$ {order.Price}</strong></td>
				  <td>{order.Salse}</td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</div>
	  </div>
	);
  }