export default class ProductModel{
    constructor(id, name, desc, imageUrl, category, price, sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
    }

    static add(product){
        product.id = product.length + 1;
        products.push(product);
        return product;
    }

    static get(id){
        const product = products.find(
            (i) => 
            i.id == id );

            return product;
    }

    static getAll(){
        return products;
    }   

    static filter(minPrice, maxPrice, category) {
        const result = products.filter((product)=>{
            return (
             (!minPrice || product.price >= minPrice) && 
             (!maxPrice || product.price <= maxPrice) && 
             (!category || product.category == category)
            );

        });

        return result;
    }

}

var products = [
    new ProductModel(
        1,
        'Product 1',
        'Description not required',
        19.99,
        'http://localhost:8000',
        'Category1'
    ),
    new ProductModel(
        2,
        'Product 2',
        'Description not required',
        29.99,
        'http://localhost:8000',
        'Category2',
        ['M', 'L']
    ),
    new ProductModel(
        3,
        'Product 3',
        'Description not required',
        39.99,
        'http://localhost:8000',
        'Category3',
        ['M', 'L']
    ),
];