import { validateEmail, validateProfilePicture } from "./Utils";

export abstract class User {

    protected userID: number;
    protected firstName: string;
    protected lastName: string;
    protected email: string;
    protected photo?: string;
    protected type: string;

    constructor(userID: number, type: string, firstName: string, lastName: string, email: string, photo: string) {

        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.photo = photo;
        this.userID = userID;
        this.type = type;
    }

    getFullName(): string {

        return this.firstName + " " + this.lastName;
    }

    getProfile(): string {

        return this.photo ? this.photo : "s3://getemail-bulk-csv/default.jpg"
    }

    getEmail(): string {

        return this.email;
    }

    getUserId(): number {

        return this.userID;
    }

    /**
     * 
     * @returns true only if user has valid email and valid photo selected else false
     */    
    saveUser(): boolean {

        let retVal = false;

        if (validateEmail(this.email) && validateProfilePicture(this.photo)) {

            retVal = true;
        }

        return retVal;
    }

    getType(): string {

        return this.type;
    }

}



