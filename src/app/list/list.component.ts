import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  name: string = "";

  constructor() { }

  ngOnInit() {
  }

   products: Product[] = [
        {
            name:'Mazorca',
            active: false,
        },
        {
            name:'Queso',
            active: false,
        },
    ];

    addItem() {
        this.products.push({name:this.name, active:false});
        this.name = "";
    }

    deleteAll() {
        this.products = [];
    }

    uncheckAll() {
        for (let product of this.products) {
            product.active = false;
        }
    }

    checkAll() {
        for (let product of this.products) {
            product.active = true;
        }
    }

}
