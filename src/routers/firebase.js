const fireBaseRouter = require('express').Router();
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../config/firebase-adminsdk.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount)
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