import { Injectable, OnInit } from "@angular/core";
import Keys from 'src/keys';
import * as firebase from "firebase";

@Injectable()
export class FireService {

    init() {
        const config: object = {
            apiKey: Keys.FIREBASE_API_KEY,
            authDomain: Keys.AUTH_DOMAIN
        };

        console.info('Firebase has been initialized.');
        firebase.initializeApp(config);
    }
}