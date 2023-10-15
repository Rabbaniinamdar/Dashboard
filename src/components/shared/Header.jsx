import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import '../CSS/Header.css';
const Header = () => {
	return (
		<div className="header-container">
			<div className='username'>
				<h1>Hello Sharukh 👋,</h1>
			</div>
			<div className="search-container">
				<HiOutlineSearch className="search-icon" />
				<input
					type="text"
					placeholder="Search..."
					className="search-input"
				/>
			</div>
		</div>
	);
}

export default Header;
