import { Injectable, OnInit } from "@angular/core";
import Keys from 'src/keys';
import * as firebase from "firebase";
import { HttpClient } from '@angular/common/http';
import { ApiRouteConstant } from '../constants/api-route.constant';
import { Observable } from 'rxjs';

@Injectable()
export class FireService {
    constructor(private http: HttpClient) {

    }

    init() {
        const config: object = {
            apiKey: Keys.FIREBASE_API_KEY,
            authDomain: Keys.AUTH_DOMAIN
        };

        console.info('Firebase has been initialized.');
        firebase.initializeApp(config);
    }

    checkAuth(): Observable<any> {
        return this.http.post(Keys.CLOUD_API + ApiRouteConstant.AUTH, {});
    }
}