import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  social = [];
  constructor() { }

  ngOnInit(): void {
    this.social = [
      {url: 'facebook-square', support: 'Contact Us'},
      {url: 'instagram', support: 'FAQ'},
      {url: 'twitter', support: 'Download'},
      {url: 'linkedin-square', support: 'Locate A Dealer'},
  ];

  }

}
