import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  address: string

  ngOnInit(): void {
      this.address = "1525 4th Ave, Seattle, WA 98101"
  }
  
}
