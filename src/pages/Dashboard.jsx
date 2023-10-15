import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import TransactionChart from '../components/TransactionChart';
import RecentOrders from '../components/RecentOrders';
import BuyerProfilePieChart from '../components/BuyerProfilePieChart';

import '../components/CSS/Dashboard.css'

export default function Dashboard() {
  return (
    <div className="main-container">
      <DashboardStatsGrid className="stats-grid" />
      <div className="chart-container">
        <TransactionChart />
        <div className='result-char'>
          <BuyerProfilePieChart />
        </div>
      </div>
      <div className="orders-container">
        <RecentOrders />
      </div>
    </div>
  );
}
