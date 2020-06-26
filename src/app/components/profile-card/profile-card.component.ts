import { Component, OnInit, Input, Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() user;
  btnText = "Follow"

  constructor() { }

  ngOnInit(): void {
  }

  follow () {
    this.user.followed = true
    this.btnText = "Following"
    
  }

}
