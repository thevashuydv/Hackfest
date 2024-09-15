import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/subscriptions">Subscriptions</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
