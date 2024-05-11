export default class Validator {
    constructor(login) {
        this.login = login;
    }
    validateUsername() {
        return    /^\w\d{3}|(-)|(_)\w$/.test(this.login);
    }
}