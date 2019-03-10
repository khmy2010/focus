import { Injectable } from "@angular/core";
import { auth } from "firebase";
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable()
export class AuthService {
    constructor(private storageService: StorageService) {

    }
    
    async login() {
        const provider = new auth.GoogleAuthProvider();

        try {
            const res = await auth().signInWithPopup(provider);
            this.storageService.set('alo', 'world');
            console.log(res);
        }
        catch(err) {
            console.error('Error while try to sign in: ', err);
        }
    }

    private setUserData() {

    }
}