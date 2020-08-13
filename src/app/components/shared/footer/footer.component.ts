import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerCopyRight: any;
  constructor() { }

  ngOnInit(): void {
    this.getCopyRightYear();
  }

  getCopyRightYear() {
    let previousYear = (new Date().getFullYear()-1);
    let currentYear = new Date().getFullYear();
    this.footerCopyRight = `${previousYear}-${currentYear}`;
  }

}
