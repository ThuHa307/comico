import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Genre from '../pages/Genre';
import DetailBook from '../pages/DetailBook';
import Ranking from '../pages/Ranking';
import Reading from '../pages/Reading';
import { DefaultLayoutSlider } from '../layouts';

// Use without login
export const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayoutSlider },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/profile', component: Profile, layout: null },
    { path: '/detail', component: DetailBook },
    { path: '/genre', component: Genre },
    { path: '/rank', component: Ranking },
    { path: '/read', component: Reading },
];

// Routes need to login to use
export const privateRoutes = [];
