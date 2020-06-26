import { Component, OnInit, Input} from '@angular/core';
import { users } from '../../models/shared/userData.json'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() people;

  user = {users};

  constructor() { }
  

  ngOnInit(): void {
  }

  
}
