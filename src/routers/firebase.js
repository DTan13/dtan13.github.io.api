const fireBaseRouter = require('express').Router();
const firebaseAdmin = require('firebase-admin');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(JSON.parse(Buffer.from(process.env.FIREBASE_ADMIN_SDK, 'base64').toString('ascii')))
});

const db = firebaseAdmin.firestore();

fireBaseRouter.post('/feedback', (req, res) => {
    db.collection('feedback').add(req.body).then(resp => {
        res.send(true);
    }).catch(err => {
        console.log(err);
        res.send(false);
    });
});

module.exports = fireBaseRouter;