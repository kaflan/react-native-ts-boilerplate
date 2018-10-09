import React from 'react';

interface Route {
  [key: string]: string;
}

export const loginNavTypes: Route = {
  LOGIN: 'login',
};

export const drawerNavTypes: Route = {
  HOME: 'home',
};
