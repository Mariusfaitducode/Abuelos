import { User } from "./user";


export class Field{
    
    uid: string = '';
    image: string = '';
    name: string = '';
    description: string = '';
    farmerId: string = '';
    products: string[] = [];

    farmer?: User;
}