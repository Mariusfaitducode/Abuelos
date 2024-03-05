

export class User{

    admin = true;

    _id: string = "";
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

    basket: {
        productId: string,
        quantity: number,
    }[] = [];
    orders: number[] = [];
}