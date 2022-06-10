import { initializeApp } from 'firebase/app'
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC0z620tnCsJPMDPvAOu1rlGsroYyjnUkA",
  authDomain: "onboard-digital.firebaseapp.com",
  projectId: "onboard-digital",
  storageBucket: "onboard-digital.appspot.com",
  messagingSenderId: "872913548414",
  appId: "1:872913548414:web:20b4a11b756fe28b1d942f"
};

initializeApp(firebaseConfig)
const auth = getAuth()

const userInfo = cred => ({ email: cred.email })

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

export const signOutUser = () => {
  signOut(auth)
}
