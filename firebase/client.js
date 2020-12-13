import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDwNjGohswGVW6g5xyAEILUKxRpqL31JB8',
  authDomain: 'devit-6a28b.firebaseapp.com',
  projectId: 'devit-6a28b',
  storageBucket: 'devit-6a28b.appspot.com',
  messagingSenderId: '270960059643',
  appId: '1:270960059643:web:59d9461fa5f079f39fbc5e'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged((user) => {
      // console.log(user)
      const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
