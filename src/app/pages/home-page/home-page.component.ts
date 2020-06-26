import { Component, OnInit} from '@angular/core';
import { users }  from '../../models/shared/userData.json';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user = {users};

  constructor() { }

  ngOnInit(): void {

  }


}
