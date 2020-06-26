import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../../models/shared/userData.json';
import { postImages } from '../../models/shared/postImagesData.json';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user = { users };
  selectedUser = [];
  selectedImages = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const getId: string = this.route.snapshot.paramMap.get('id');
    const id = +getId;
    const userId: number = id - 1;

    const newData = this.user.users[userId];
    this.selectedUser.push(newData);

    const newImgData = postImages.filter((image) => image.userId == id);
    this.selectedImages.push(newImgData);
  }
}
