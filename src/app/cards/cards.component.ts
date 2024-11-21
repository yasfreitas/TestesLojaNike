import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../model/service/product.service'; 
import { Iproduct } from '../model/service/iproduct'; 

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  constructor(private productsServices:ProductService){}
  product: Iproduct[] = [];
  buttonColor = '#ff6452';

  ngOnInit(): void {
    this.product = this.productsServices.getProduct();
  }
  changeColor() {
    this.buttonColor = '#ff4500';
  }

}
