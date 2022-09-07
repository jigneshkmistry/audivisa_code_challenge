
export const validateEmail = (email: string): boolean => {

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


export const validateProfilePicture = (profilePicture: string): boolean => {

    return profilePicture ? profilePicture.includes(".jpg") : false;
}