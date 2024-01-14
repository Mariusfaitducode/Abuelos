

export class Product{
    id: number;
    name: string;
    description: string;
    price: number;
    created_at: string;
    updated_at: string;
    constructor(id: number = 0, name: string = '', description: string = '', price: number = 0, created_at: string = '', updated_at: string = ''){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}