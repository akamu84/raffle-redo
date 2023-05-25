import React from 'react';
import { Navbar } from '@mantine/core';
import { NavLink } from '../components/NavLink';

export const SideNavigation = (): React.ReactElement => {
  return (
    <Navbar width={{ base: 150 }}>
      <NavLink label="Home" to="/"/>
      <NavLink label="Dashboard" to="/dashboard/8f53bc33-805b-48b2-b820-a6d9db767b3f"/>
      <NavLink label="Admin" to="/admin/8f53bc33-805b-48b2-b820-a6d9db767b3f"/>
      {/* <NavLink label="Volunteers" to="/volunteers"/> */}
      {/* <NavLink label="Ticket Printing" to="/printing"/> */}
      {/* <NavLink label="Purchases" to="/purchases"/> */}
      {/* <NavLink label="Deposits" to="/deposits"/> */}
      {/* <NavLink label="Tasks" to="/tasks"/> */}
      {/* <NavLink label="Prizes" to="/prizes"/> */}
      {/* <NavLink label="Reservations" to="/reservations"/> */}
    </Navbar>
  );
};
