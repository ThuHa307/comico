import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Genre from '../pages/Genre';
import DetailBook from '../pages/DetailBook';
import Ranking from '../pages/Ranking';
import Reading from '../pages/Reading';
import { DefaultLayoutSlider } from '../layouts';
import ProfileLayout from '../layouts/ProfileLayout';
import Profile from '../pages/Profile';

// Use without login
export const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayoutSlider },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/detail/:id', component: DetailBook },
    { path: '/genre/:genreCode', component: Genre },
    { path: '/rank', component: Ranking },
    { path: '/read', component: Reading },
    { path: '/profile', component: Profile, layout: ProfileLayout },
];

// Routes need to login to use
export const privateRoutes = [];
