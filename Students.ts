import { User } from "./User";

export class Student extends User {


    constructor(userID: number, firstName: string, lastName: string, email: string, photo: string) {

        super(userID, "Student", firstName, lastName, email, photo);
    }

    getFullName(): string {

        return super.getFullName();
    }
}