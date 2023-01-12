import {CategoryModel} from "./category.model";

export interface ProductModel {
    id:number;
    title:string;
    price:number;
    descripcion:string;
    images:string[];
    category:CategoryModel;
}