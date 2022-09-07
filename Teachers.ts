import { User } from "./User";

export class Teachers extends User {

    private salutation: string;

    constructor(userID: number, firstName: string, lastName: string, email: string, photo: string, salutation: string = null) {

        super(userID, "Teachers", firstName, lastName, email, photo);
        this.salutation = salutation;
    }

    getFullName(): string {
        return this.salutation ? this.salutation + " " + super.getFullName() : super.getFullName();
    }
}