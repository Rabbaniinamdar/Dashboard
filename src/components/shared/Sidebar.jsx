import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Sidebar.css';
import { TbHexagonLetterO } from 'react-icons/tb';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog
} from 'react-icons/hi'

const linkClass = 'link-class';
const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />
  },
  {
    key: 'products',
    label: 'Products',
    path: '/products',
    icon: <HiOutlineCube />
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: <HiOutlineUsers />
  },
  {
    key: 'Income',
    label: 'Income',
    path: '/income',
    icon: <HiOutlineDocumentText />
  },
  {
    key: 'promote',
    label: 'Promote',
    path: '/promote',
    icon: <HiOutlineAnnotation />
  },
  {
    key: 'help',
    label: 'Help ',
    path: '/help',
    icon: <HiOutlineQuestionMarkCircle />
  }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />
  },

]

export default function Sidebar() {
  const { pathname } = useLocation();
  
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <TbHexagonLetterO fontSize={30} color='white' />
        <span className="sidebar-title">Dashboard</span>
      </div>
      <div className="sidebar-links">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} pathname={pathname} />
        ))}
      </div>
      <div className="sidebar-footer">
        <div className={classNames(linkClass, 'logout-link')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg" alt="" />
          <div className='logout_info'>
            <span className='name'>Virat Kohli</span>
            <span className='role'>Project Manager</span>
          </div>
          <AiOutlineDown className="downarrow-mark" />
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link, pathname }) {
  return (
    <div className='dashboard-items'>
      <Link
        to={link.path}
        className={classNames(pathname === link.path ? 'link-active' : 'link-inactive', linkClass)}
      >
        <AiOutlineRight className="arrow-mark" />
        <span className="text-xl">{link.icon}</span>
        {link.label}
      </Link>
    </div>
  );
}