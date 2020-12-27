
const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://devit-6a28b.firebaseio.com",
  });
} catch (e) {}

export const firestore = admin.firestore()