import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import {supabase} from '../supbase/init' 


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home',
			auth: false
		}
	},
	{
		path: '/create',
		name: 'Create',
		component: () => import('../views/Create.vue'),
		meta: {
			title: 'Create',
			auth: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
		meta: {
			title: 'Login',
			auth: false
		}
	},
    {
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue'),
		meta: {
			title: 'Register',
			auth: false
		}
	},
	{
		path: '/view-workout/:workoutId',
		name: 'View-Workout',
		component: () => import('../views/ViewWorkout.vue'),
		meta: {
			title: 'View Workout',
			auth: false
		}
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

// Change document titles
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} || Active Tracker`;
	next();
})
// Route guard for auth routes
router.beforeEach((to, from, next) => {
	const user = supabase.auth.user();
	if (to.matched.some((res) => res.meta.auth)) {
		if (user) {
			next();
			return;
		}
		next({name: "Login"})
		return;
	} 
	next();
})

export default router;
