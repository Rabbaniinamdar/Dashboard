import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

import './CSS/TransactionChart.css'
const data = [
	{
		name: 'Jan',
		Expense: 4000,
		Income: 5400,
	},
	{
		name: 'Feb',
		Expense: 3000,
		Income: 3398,
	},
	{
		name: 'Mar',
		Expense: 2000,
		Income: 5800,
	},
	{
		name: 'Apr',
		Expense: 2780,
		Income: 5908,
	},
	{
		name: 'May',
		Expense: 1890,
		Income: 7800,
	},
	{
		name: 'Jun',
		Expense: 2390,
		Income: 6800,
	},
	{
		name: 'July',
		Expense: 3490,
		Income: 8300,
	},
	{
		name: 'Aug',
		Expense: 2000,
		Income: 11800,
	},
	{
		name: 'Sep',
		Expense: 2780,
		Income: 5908,
	},
	{
		name: 'Oct',
		Expense: 1890,
		Income: 7800,
	},
	{
		name: 'Nov',
		Expense: 2390,
		Income: 6800,
	},
	{
		name: 'Dec',
		Expense: 3490,
		Income: 5300,
	},
];


export default function TransactionChart() {
	return (
		<div className="container">
			<div className='bar-heading'>
				<p className="title">Overview</p>
				<p className="sub-title">Monthly Earning</p>
				<div className='select-Quartly'>
					<select name="decade" id="decade">
						<option value="Quartly">Quartely</option>
						<option value="Quartly">Quartely</option>
						<option value="Quartly">Quartely</option>
					</select>
				</div>
			</div>
			<div className="chart-container">
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={data} className='barchart'>
						<CartesianGrid className="cartesian-grid" horizontal={false} vertical={false}/>
						<XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: "18px" }} />
						<Bar dataKey="Income" className="bar" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}