

export class User{

    admin = true;

    uid: string = "";
    firstname: string = "";
    lastname: string = "";
    pseudo: string = "";
    email: string = "";
    // password: string = "";
    status: string = "test";
    phone: string = "test";
    avatar: string = "";

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

    // seller: boolean = false;
    role: string = "user";

    conversations: string[] = [];
}