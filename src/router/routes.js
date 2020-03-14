import HomePage from '../page/HomePage';
import ExampleScrollPage from '../page/ExampleScrollPage';

export const RouteNames = {
  HOME: 'home',
  EXAMPLE: 'example',
};

export default [
  {
    path: '/home',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/',
    component: ExampleScrollPage,
    name: RouteNames.EXAMPLE,
  },
];
