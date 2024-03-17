

export class Product{

    uid: string = '';

    name: string = '';
    variety: string = '';
    origin: string = '';
    season : string = '';
    field: string = '';

    description: string = '';

    price: number = 0;

    labels: string[] = [];

    weight: number = 0;
    promotion: number = 0;
    stock: number = 0;

    next_harvest : Date = new Date();
    limit_date : Date = new Date();

    image: string = '';

    // created_at: string;
    // updated_at: string;

    // constructor(id: string = '', name: string = '', description: string = '', price: number = 0, created_at: string = '', updated_at: string = ''){
    //     this._id = id;
    //     this.name = name;
    //     this.description = description;
    //     this.price = price;
    //     // this.created_at = created_at;
    //     // this.updated_at = updated_at;
    // }
}

export class OrderItem{
    productId: string = '';
    product?: Product = new Product();
    quantity: number = 0;
}
