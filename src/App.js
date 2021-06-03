import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/sign/sign.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});

		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignPage} />
			</Switch>
		</div>
	);
}

export default App;
