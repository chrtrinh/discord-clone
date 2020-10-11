import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCjDZ7vzaEPE_p_Ne54u6Sy2kjhlMJMPYs',
	authDomain: 'discord-clone-e1223.firebaseapp.com',
	databaseURL: 'https://discord-clone-e1223.firebaseio.com',
	projectId: 'discord-clone-e1223',
	storageBucket: 'discord-clone-e1223.appspot.com',
	messagingSenderId: '507364703494',
	appId: '1:507364703494:web:a9f33b6ca4120f9cc2f287',
	measurementId: 'G-JDQ068HYKE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
