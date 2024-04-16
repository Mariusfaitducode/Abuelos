

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
    role: Role = Role.user;

    conversations: string[] = [];


    // Farmer || Repartidor

    fields: string[] = [];

    deliveryAddress? : {
        street: string,
        number: string,
        postalCode: string,
        city: string,
        country: string,
    }
}


export enum Role {
    user = "user",
    farmer = "farmer",
    seller = "seller",
    admin = "admin",

}


// export class Farmer extends User{

//     override role: string = "farmer";

//     // products: string[] = [];

//     fields: string[] = [];
// }



// export class Repartidor extends User{

//     override role: string = "seller";
    


//     fields: string[] = [];

//     deliveryAddress? : {
//         street: string,
//         number: string,
//         postalCode: string,
//         city: string,
//         country: string,
//     }
// }


