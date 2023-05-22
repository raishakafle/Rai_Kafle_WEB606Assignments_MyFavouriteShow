import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contentList: Content[] = [
    {
      id: 1,
      title: 'Money Heist',
      description: 'spanish show',
      creator: 'from spain',
      imgURL: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
      type: 'Thriller',
      tags: ['webseries, Netflix']
    },
    {
      id: 2,
      title: 'Vikings',
      description: 'Norway',
      creator: 'From Uk',
      imgURL: 'https://variety.com/wp-content/uploads/2014/02/vikings-tv-review.jpg?w=681&h=383&crop=1',
      type: 'History',
      tags: ['webseries, Netflix']
    }
  ];

  constructor() {}
}


