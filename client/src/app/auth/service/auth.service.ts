import { Injectable } from "@angular/core";
import { auth } from "firebase";
import { StorageService } from 'src/app/core/services/storage.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouteConstant } from 'src/app/core/constants/route.constants';

@Injectable()
export class AuthService {
    constructor(private storageService: StorageService, private router: Router, private http: HttpClient) {

    }
    
    async login() {
        const provider = new auth.GoogleAuthProvider();

        try {
            const res: any = await auth().signInWithPopup(provider);
            const { additionalUserInfo, user, credential } = res;
            const userData: User = {
                familyName: additionalUserInfo.profile.family_name,
                givenName: additionalUserInfo.profile.given_name,
                picture: additionalUserInfo.profile.picture,
                email: additionalUserInfo.profile.email,
                uid: user.uid,
                idToken: credential.idToken,
                accessToken: credential.accessToken
            };

            if (additionalUserInfo.isNewUser) {
                console.log('New User!!!');
            }

            const token = await auth().currentUser.getIdToken(true);
            userData.idToken = token;

            this.storageService.set('user', userData);
            this.router.navigateByUrl(RouteConstant.TIME);
        }
        catch(err) {
            console.error('Error while try to sign in: ', err);
        }
    }

    async logout() {

    }

    get idToken(): string {
        const userData: User = this.userData;
        
        return userData ? userData.idToken : null;
    }

    get userData(): User {
        return this.storageService.get('user');
    }
}