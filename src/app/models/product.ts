

export class Product{
    _id: string;
    name: string;
    description: string;
    price: number;

    


    // created_at: string;
    // updated_at: string;

    constructor(id: string = '', name: string = '', description: string = '', price: number = 0, created_at: string = '', updated_at: string = ''){
        this._id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        // this.created_at = created_at;
        // this.updated_at = updated_at;
    }
}