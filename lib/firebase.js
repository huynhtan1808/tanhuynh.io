import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      "project_id": "tanhuynh-blog",
      "private_key": process.env.FIREBASE_PRIVATE_KEY,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: "https://tanhuynh-blog-default-rtdb.firebaseio.com/"
  });
}

export default admin.database();
