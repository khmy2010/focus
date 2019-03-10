import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    public static LOCAL_STORAGE = "LOCAL_STORAGE";
    public static SESSION_STORAGE = "SESSION_STORAGE";

    set(key: any, data: string, stringify?: boolean, dest?: string) {
        let isStringify: boolean = stringify || false;

        if (typeof data === 'object' && !isStringify) {
            isStringify = true;
        }

        this.getStorage(dest).setItem(key, isStringify ? JSON.stringify(data) : data);
    }

    get(key: string, dest?: string) {
        try {
            return JSON.stringify(this.getStorage(dest).getItem(key));
        }
        catch(_) {
            return this.getStorage(dest).getItem(key);
        }
    }

    delete(key: string, dest?: string) {
        this.getStorage(dest).removeItem(key);
    }

    deleteMany(dest: string, ...keys: Array<string>) {
        for (const key in keys) {
            this.delete(key, dest);
        }
    }

    private getStorage(dest?: string) {
        switch(dest) {
            case StorageService.LOCAL_STORAGE:
                return localStorage;
            case StorageService.SESSION_STORAGE:
            default:
                return sessionStorage;
        }
        
    }

}