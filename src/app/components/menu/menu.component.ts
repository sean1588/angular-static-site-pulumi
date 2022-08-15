import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  menuItems: Array<{}>
  constructor() {
      this.menuItems = [
        {
          name: "drip",
          price: "$3.00"
        },
        {
          name: "espressso",
          price: "$3.50"
        },
        {
          name: "americano",
          price: "$3.50"
        },
        {
          name: "latte",
          price: "$4.75"
        },
        {
          name: "cortado",
          price: "$3.50"
        },
        {
          name: "tea",
          price: "$3.00"
        }
      ]
  }

}
