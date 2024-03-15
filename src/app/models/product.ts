

export class Product{
    _id: string = '';
    name: string = '';
    description: string = '';
    price: number = 0;

    variety: string = '';

    labels: string[] = [];
    origin: string = '';

    weight: number = 0;
    promotion: number = 0;
    stock: number = 0;
    season : string = '';

    next_harvest : Date = new Date();
    limit_date : Date = new Date();

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
    product: Product = new Product();
    quantity: number = 0;
}
