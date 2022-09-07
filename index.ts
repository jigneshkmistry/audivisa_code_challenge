import { Message } from "./Message";
import { Parents } from "./Parents";
import { Student } from "./Students";
import { User } from "./User";

let student: User = new Student(1, "Jignesh", "Mistry", "j@j.com", undefined);
let student_with_image: User = new Student(1, "Jignesh", "Mistry", "j@com", "s3://jkm.jpg");
let fullname = student.getFullName();
let profile = student.getProfile();
let userSaved = student.saveUser();
let user_With_Image_Saved = student_with_image.saveUser();


console.log("Student : " + fullname);
console.log("Profile : " + profile);
console.log("UserSaved : " + userSaved);

let parent = new Parents(1, "Kantilal", "Mistry", "k@k.com", "s3://jkm.jpg", "Mr.");
fullname = parent.getFullName();
profile = parent.getProfile();

console.log("Parent : " + fullname);
console.log("Parent : " + profile);


let message: Message = new Message(student,parent,"Hi there","System");
let manual_message: Message = new Message(student,parent,"Hi there","Manual");
let messageResult = message.saveMessage();
let manual_messageResult = manual_message.saveMessage();
let formatted_CreationTime =  manual_message.getFormatterCreationTime();
console.log("Message Result : " + messageResult);
console.log("Manual Message Result : " + manual_messageResult);
console.log("Formatted CreationTime" + formatted_CreationTime);
