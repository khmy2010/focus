const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

admin.initializeApp();
app.use(bodyParser.json());
app.use(cors());

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.

const authenticate = async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        console.log('no!!!!')
        res.status(403).send('Unauthorized');
        return;
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    console.log(idToken);
    try {
        const decodedIdToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedIdToken;
        next();
        return;
    } catch(e) {
        res.status(403).send('Unauthorized');
        return;
    }
}

app.use(authenticate);

app.post('/auth', async(req, res) => {
    res.status(200).json(req.user);
});

exports.api = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// interface DecodedIdToken {
//     aud: string;
//     auth_time: number;
//     exp: number;
//     firebase: {
//       identities: {
//         [key: string]: any;
//       };
//       sign_in_provider: string;
//       [key: string]: any;
//     };
//     iat: number;
//     iss: string;
//     sub: string;
//     uid: string;
//     [key: string]: any;
//   }