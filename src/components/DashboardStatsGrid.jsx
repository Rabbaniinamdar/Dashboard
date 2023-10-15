import React from 'react';
import {
  AiOutlineDollar,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { MdOutlineAccountBalanceWallet, MdOutlineLibraryBooks } from 'react-icons/md';

import './CSS/DashboardStatsGrid.css';

export default function DashboardStatsGrid() {
  return (
    <div className="dashboard-stats-grid">
      <div className="text-content">
        <AiOutlineDollar className="icon green" />
        <div className="amount">
          <span className="label">Earnings</span>
          <strong>$198k</strong>
          <div>
            <span className="change positive">
              <AiOutlineArrowUp />
              <b>37% </b>this week
            </span>
          </div>
        </div>
      </div>

      <div className="text-content">
        <MdOutlineLibraryBooks className="icon purple" />
        <div className="amount">
          <span className="label">Orders</span>
          <strong>$2.4k</strong>
          <span className="change negative">
            <AiOutlineArrowDown />
            <b>2% </b>this month
          </span>
        </div>
      </div>

      <div className="text-content">
        <MdOutlineAccountBalanceWallet className="icon blue" />
        <div className="amount">
          <span className="label">Balance</span>
          <strong>$2.4k</strong>
          <span className="change negative">
            <AiOutlineArrowDown />
            <b>2% </b>this month
          </span>
        </div>
      </div>

      <div className="text-content">
        <FiLock className="icon red" />
        <div className="amount">
          <span className="label">Total Sales</span>
          <strong>$89k</strong>
          <span className="change positive">
            <AiOutlineArrowUp />
            <b>11% </b>this week
          </span>
        </div>
      </div>
    </div>
  );
}
