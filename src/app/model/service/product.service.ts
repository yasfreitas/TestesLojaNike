import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product: Iproduct[] = [
  {id: 1, nome: 'Nike Air Max 90', descricao: 'Corrida / Casual', preco: 50.00, image:'./tenis1.png'},
  {id: 2, nome: 'Nike Air Force 270', descricao: 'Bebês / Casual', preco: 60.00, image:'./tenis2.png'},
  {id: 13, nome: 'Nike Air Force', descricao: 'Casual', preco: 40.00, image:'./tenis3.png'},
  ];

  getProduct(): Iproduct[]{
    return this.product;
  }
}