import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/sign/sign.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({ id: snapShot.id, photoURL: userAuth.photoURL, ...snapShot.data() });
				});
			} else {
				setCurrentUser(null);
			}
		});

		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	console.log(currentUser);

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
