import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import '../CSS/Layout.css'
export default function Layout() {
	return (
		<div className="layout">
			<Sidebar />
			<div className="main-content">
				<Header />
				<div className="content">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
