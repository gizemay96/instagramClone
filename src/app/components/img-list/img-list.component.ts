import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})
export class ImgListComponent implements OnInit {

@Input() images;
  constructor() { }

  ngOnInit(): void {
  }

}
