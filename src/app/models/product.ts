export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://lh3.googleusercontent.com/YFEk9_h2-LGOCmDTGHrhog750sUzuOM01wzs1Bl9iwy3Fta6SXkMy-mg2_xq4Z8vb2D22C-BDxMi2alP0sY9u7FktOMKKA-dBdDQvHc=s660') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
