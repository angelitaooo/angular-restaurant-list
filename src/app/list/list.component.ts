import { Component, OnInit } from '@angular/core';

class Product {
  name: string;
  active: boolean;
  constructor(name, active){
    this.name = name;
    this.active = active;
  }  
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  name: string = "";

  products: Product[] = [
    new Product('Mazorca', false),   
    new Product('queso', false)
  ];

    addItem() {
        this.products.push(new Product(this.name, false));
        this.name = "";
    }

    deleteAll() {
        this.products = [];
    }

    uncheckAll() {
      this.products.forEach(product => {
        product.active = false;
      });
    }

    checkAll() {
        this.products.forEach(product => {
        product.active = true;
      });
    }
}
