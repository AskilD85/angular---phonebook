import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './product';
 
@Injectable()
export class DataService {
 
    private url = "https://localhost:44317/api/values/";
 
    constructor(private http: HttpClient) {
    }
 
    getProducts() {
        return this.http.get(this.url);
    }
 
    createProduct(product: Product) {
        return this.http.post(this.url, product);
    }
    updateProduct(product: Product) {
  
        return this.http.put(this.url + '/' + product.id, product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}