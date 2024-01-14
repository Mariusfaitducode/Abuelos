

export class User{

    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    remember_me: boolean;
    created_at: string;
    updated_at: string;
    token: string;
    role: string;
    constructor(id: number = 0, name: string = '', email: string = '', password: string = '', password_confirmation: string = '', remember_me: boolean = false, created_at: string = '', updated_at: string = '', token: string = '', role: string = ''){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.remember_me = remember_me;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.token = token;
        this.role = role;
    }
    // constructor(){
    //     this.id = 0;
    //     this.name = '';
    //     this.email = '';
    //     this.password = '';
    //     this.password_confirmation = '';
    //     this.remember_me = false;
    //     this.created_at = '';
    //     this.updated_at = '';
    //     this.token = '';
    //     this.role = '';
    // }
}