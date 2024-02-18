

export class User{

    // id: number = 0;

    admin = true;

    firstname: string = "";
    lastname: string = "";
    pseudo: string = "";
    email: string = "";
    password: string = "";
    status: string = "test";
    phone: string = "test";

    adress?: {
        street: string,
        number: string,
        postalCode: string,
        city: string,
        country: string,
    }

    basket: number[] = [];
    orders: number[] = [];
    
}