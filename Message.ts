import { User } from "./User";

export class Message {

    private sender: User;
    private receiver: User;
    private message: string;
    private creationTime: number;
    private messageType: string;

    constructor(sender, receiver, message, messageType) {

        this.creationTime = Date.now();
        this.sender = sender;
        this.receiver = receiver;
        this.message = message;
        this.messageType = messageType;
    }

    saveMessage(): boolean {

        let retVal = false;

        if (this.messageType === "System"
            && this.sender.getType() === "Teachers"
            && this.receiver.getType() === "Student") {
                
            retVal = true;
        }
        else if (this.messageType === "Manual") {

            retVal = true;
        }

        return retVal;
    }

    getMessage(): string {

        return this.message;
    }

    getSenderFullName(): string {

        return this.sender.getFullName();
    }

    getReceiverFullName(): string {

        return this.receiver.getFullName();
    }

    getMessageType(): string {

        return this.messageType;
    }

    getFormatterCreationTime() {

        var creationDateTime = new Date(this.creationTime);

        let formattedDate = [creationDateTime.getMonth() + 1,
        creationDateTime.getDate(),
        creationDateTime.getFullYear()].join('/') + ' ' +
            [creationDateTime.getHours(),
            creationDateTime.getMinutes(),
            creationDateTime.getSeconds()].join(':');

        return formattedDate;
    }

}
