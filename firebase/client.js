import { initializeApp } from 'firebase/app'
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0z620tnCsJPMDPvAOu1rlGsroYyjnUkA",
  authDomain: "onboard-digital.firebaseapp.com",
  projectId: "onboard-digital",
  storageBucket: "onboard-digital.appspot.com",
  messagingSenderId: "872913548414",
  appId: "1:872913548414:web:20b4a11b756fe28b1d942f"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

const userInfo = cred => ({
  email: cred.email,
  displayName: cred.displayName ? cred.displayName : cred.email.split('@')[0],
  image: cred.photoURL ? cred.photoURL : '/user.png',
  uid: cred.uid
})

export const createSavingAccount = data => {
  return addDoc(collection(db, 'savingAccounts'), data)
}

export const getSavingAccountData = uid => {
  const getAccount = query(collection(db, 'savingAccounts'), where('uid', '==', uid))
  return getDocs(getAccount)
}

export const createCheckAccount = data => {
  return addDoc(collection(db, 'checkAccounts'), data)
}

export const getCheckAccountData = uid => {
  const getAccount = query(collection(db, 'checkAccounts'), where('uid', '==', uid))
  return getDocs(getAccount)
}

export const updatePlan = (data, dbRef) => {
  const ref = doc(db, dbRef, data.id)
  return updateDoc(ref, { plan: data.plan })
}

export const onAuthUser = onChange => {
  return onAuthStateChanged(auth, credential => {
    const normalizeUser = credential ? userInfo(credential) : null
    onChange(normalizeUser)
  })
}

export const addUser = (user) => {
  return createUserWithEmailAndPassword(auth, user.email, user.password)
}

export const loginEmailPassword = (user) => {
  return signInWithEmailAndPassword(auth, user.email, user.password)
}

export const loginFacebook = () => {
  const facebookProvider = new FacebookAuthProvider()
  return signInWithPopup(auth, facebookProvider)
    .then(cred => userInfo(cred.user))
    .catch(err => console.log('Error facebook', err))
}

export const loginGmail = () => {
  const gmailProvider = new GoogleAuthProvider
  return signInWithPopup(auth, gmailProvider)
    .then(credential => userInfo(credential.user))
    .catch(err => console.log(err))
}

export const signOutUser = () => {
  signOut(auth)
}
