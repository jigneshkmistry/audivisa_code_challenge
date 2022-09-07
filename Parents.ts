import { User } from "./User";

export class Parents extends User {

    private salutation: string;

    constructor(userID: number, firstName: string, lastName: string, email: string, photo: string, salutation: string = null) {

        super(userID, "Parents", firstName, lastName, email, photo);
        this.salutation = salutation;
    }

    getFullName(): string {
        return this.salutation ? this.salutation + " " + super.getFullName() : super.getFullName();
    }
}
