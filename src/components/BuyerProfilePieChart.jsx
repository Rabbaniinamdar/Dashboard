import React from 'react';
import './CSS/BuyerProfilePieChart.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'Male', value: 400 },
	{ name: 'Female', value: 920 },
	{ name: 'Other', value: 890 }
];

const COLORS = ['rgba(255, 0, 106, 0.932)', 'rgba(169, 184, 255, 0.268)', 'rgba(106, 0, 255, 0.91)'];


export default function BuyerProfilePieChart() {
	const centerX = 185;
	const centerY = 110;

	return (
		<div className="dnchart-container">
			<p className="title">Customers</p>
			<p className="sub-title">Customers that buy products</p>			<div className="dnchart-content">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							outerRadius={110}
							innerRadius={70}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<text
							x={centerX}
							y={centerY}
							className="dnchart-text"
						>
							<tspan fontSize="30" fontWeight="bolder">65%</tspan>
							<tspan fontSize="17" x={centerX} dy="1.2em">Total New</tspan>
							<tspan fontSize="17" x={centerX} dy="1em">Customers</tspan>
						</text>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
