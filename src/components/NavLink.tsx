import React from 'react';
import { NavLink as MantineNavLink } from '@mantine/core';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  label: string
  to: string
}

export const NavLink = ({ to, label }: NavLinkProps): React.ReactElement => {
  return (
    <RouterNavLink style={{ textDecoration: 'none' }} to={to}>
      {({ isActive }) => (<MantineNavLink label={label} active={isActive} variant="filled"/>)}
    </RouterNavLink>
  );
};
