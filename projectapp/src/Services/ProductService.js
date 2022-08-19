import axios from 'axios';

const PRODUCT_API_BASE_URL = "https://localhost:44362/api/Products";

class ProductService {

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProductById(productid){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productid);
    }

    updateProduct(product,productid){
        return axios.put(PRODUCT_API_BASE_URL + '/' + productid, product);
    }
        deleteProduct(productid){
            return axios.delete(PRODUCT_API_BASE_URL + '/' + productid);
        }
    }
    
    export default new ProductService()