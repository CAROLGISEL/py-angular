
import { HttpClient } from '@angular/common/http';
import { OnInit,Component } from '@angular/core';
import { ProductModel } from 'src/app/entities/product.model';
import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(private productHttp:ProductHttpService) { }
  data = {
    title: 'Computadoras gratis!',
    price: 10,
    description: 'Intel: Core i3,i5,i7,i9 / Carol',
    images: [
      'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XSTNQA7FMBGMHJT5BDADJSLOQY.jpg',
    ],
    categoryId: 1,
  };

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    this.updateProduct(236);
    //this.deleteProduct(235);
  }
  async getProducts(){
    const response = this.productHttp.getAll().subscribe((response) => {
      this.products = response;
      console.log(response);
    });
  }
  getProduct() {
    const response = this.productHttp.getOne(8).subscribe((response) => {
      console.log(response);
    });
  }
  createProduct() {
    const response = this.productHttp
      .store(this.data)
      .subscribe((response) => {
        console.log(response);
      });
  }
  updateProduct(id:number) {
    const response = this.productHttp
      .update(id,this.data)
      .subscribe((response) => {
        console.log(response);
      });
  }
  deleteProduct(id: number) {
    const response = this.productHttp.destroy(id).subscribe((response) => {
      this.products = this.products.filter(product => product.id != id)
      console.log(response);
    });
  }
}
