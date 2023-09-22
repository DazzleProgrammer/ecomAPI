export default class UserModel {
    constructor(name, email, password, type, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }

    // Sign Up
    static SignUp(name, email, password, type){
        const newUser = new UserModel(
            name,
            email,
            password,
            type
        );
        newUser.id = users.length + 1;
        users.push(newUser);
        return newUser;
    }

    // Sign In
    static SignIn(email, password){
        const user = users.find(
            (u) => 
            u.email == email && u.password == password
        );
        return user;
    }

}


var users = [
    {
    id:1,
    name: "seller",
    email: "seller@ecom.com",
    password: "Password1",
    type:"seller"  
},

];

