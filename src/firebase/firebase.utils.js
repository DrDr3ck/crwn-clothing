import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDsdb_evHb0_LRr8Zy7swdc80Nxm5RgSxQ',
	authDomain: 'crwn-db-70d33.firebaseapp.com',
	projectId: 'crwn-db-70d33',
	storageBucket: 'crwn-db-70d33.appspot.com',
	messagingSenderId: '658730783851',
	appId: '1:658730783851:web:72cc373d73a0b8da994d2e',
	measurementId: 'G-42TGZPRD64'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	console.log(snapShot.exists, snapShot.id);
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		console.log('creating user', createdAt);

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log('error creating user', error.message);
		}
	} else {
		console.log('user exists');
	}

	return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
