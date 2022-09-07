import { Message } from "./Message";
import { Parents } from "./Parents";
import { Student } from "./Students";
import { Teachers } from "./Teachers";
import { User } from "./User";

let student: User = new Student(1, "Jignesh", "Mistry", "j@j.com", undefined);
console.log("!!!!STUDENT!!!!");
console.log("Full Name : " + student.getFullName());
console.log("Profile : " + student.getProfile());
console.log("Email : " + student.getEmail());
console.log("UserId : " + student.getUserId());

console.log("===============================================");

let teacher: User = new Teachers(2, "Sanjay", "Patel", "sanjay@yopmail.com", "s3://sanjay.jpg","Mr.");
console.log("!!!!Teacher!!!!");
console.log("Full Name : " + teacher.getFullName());
console.log("Profile : " + teacher.getProfile());
console.log("Email : " + teacher.getEmail());
console.log("UserId : " + teacher.getUserId());


console.log("===============================================");

let parent: User = new Parents(3, "Kantilal", "Mistry", "kantilal@yopmail.com", "s3://kantilal.jpg","Dr.");
console.log("!!!!Parents!!!!");
console.log("Full Name : " + parent.getFullName());
console.log("Profile : " + parent.getProfile());
console.log("Email : " + parent.getEmail());
console.log("UserId : " + parent.getUserId());


console.log("===============================================");
console.log("!!!!Validations!!!!");
let teacher_With_Bad_Email: User = new Teachers(4, "Bad", "Email", "bad@yopmail", "s3://sanjay.jpg","Mr.");
let teacher_With_Bad_Photo: User = new Teachers(4, "Bad", "Email", "bad@yopmail", "s3://sanjay.jpg","Mr.");
let teacher_with_email_photo: User = new Teachers(4, "Bad", "Email", "sanjay@yopmail.com", "s3://sanjay.jpg","Mr.");
console.log("Should not save user with bad email : " + teacher_With_Bad_Email.saveUser());
console.log("Should not save user with bad photo : " + teacher_With_Bad_Photo.saveUser());
console.log("Should save user with correct email and photo : " + teacher_with_email_photo.saveUser());



console.log("===============================================");
console.log("!!!!Message!!!!");
let message: Message = new Message(student,teacher,"Hi there","System");
console.log("Get Sender FullName: " + message.getSenderFullName());
console.log("Get Receiver FullName: " + message.getReceiverFullName());
console.log("Message Type : " + message.getMessageType());
console.log("Creation time : " + message.getFormatterCreationTime());

console.log("!!!!System Message!!!!");

let teacher_system_message_to_student: Message = new Message(teacher,student,"Hi there","System");
console.log("Teacher can send System Message to Student : " + teacher_system_message_to_student.saveMessage());

let student_system_message_to_teacher: Message = new Message(student,teacher,"Hi there","System");
console.log("Student can not send System Message to Teacher : " + student_system_message_to_teacher.saveMessage());

let parent_system_message_to_teacher: Message = new Message(parent,teacher,"Hi there","System");
console.log("Parent can not send System Message to Teacher : " + parent_system_message_to_teacher.saveMessage());

let parent_system_message_to_student: Message = new Message(parent,student,"Hi there","System");
console.log("Parent can not send System Message to Student : " + parent_system_message_to_student.saveMessage());

console.log("!!!!Manual Message!!!!");

let parent_manual_message_to_student: Message = new Message(parent,student,"Hi there","Manual");
console.log("Parent can send Manual Message to Student : " + parent_manual_message_to_student.saveMessage());

let parent_maual_message_to_teacher: Message = new Message(parent,teacher,"Hi there","Manual");
console.log("Parent can send Manual Message to Teacher : " + parent_maual_message_to_teacher.saveMessage());


let teacher_manual_message_to_student: Message = new Message(teacher,student,"Hi there","Manual");
console.log("Teacher can send Manual Message to Student : " + teacher_manual_message_to_student.saveMessage());

let teacher_manual_message_to_parent: Message = new Message(teacher,parent,"Hi there","Manual");
console.log("Teacher can send Manual Message to Parent : " + teacher_manual_message_to_parent.saveMessage());

let student_manual_message_to_parent: Message = new Message(student,parent,"Hi there","Manual");
console.log("Student can send Manual Message to Parent : " + student_manual_message_to_parent.saveMessage());

let student_manual_message_to_teacher: Message = new Message(student,teacher,"Hi there","Manual");
console.log("Student can send Manual Message to Parent : " + student_manual_message_to_teacher.saveMessage());
