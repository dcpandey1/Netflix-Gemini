const checkValidData = (email, password) => {
    const isEmailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if (!isEmailValid)
        return "Email ID is not Valid";
    if (!isPasswordValid)
        return "Password is not Valid";
    return null;

}
export default checkValidData;