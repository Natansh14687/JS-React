const validateLoginInfo = (email, password) => {
    const validEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validEmail) return "Email is not valid";
    if(!validPassword) return "Password is not valid";

    return null;
}

export default validateLoginInfo;