// import { Component } from '@angular/core';
// import { Content } from '../helper-files/content-interface';


// @Component({
//   selector: 'app-content-list',
//   templateUrl: './content-list.component.html',
//   styleUrls: ['./content-list.component.scss']
// })


// export class ContentListComponent {
//   contentList: Content[] = [
//     {
//       id: 1,
//       title: 'Money Heist',
//       description: 'spanish show',
//       creator: 'from spain',
//       imgURL: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
//       type: 'Thriller',
//       tags: ['webseries, Netflix']
//     },
//     {
//       id: 2,
//       title: 'Vikings',
//       description: 'Norway',
//       creator: 'From Uk',
//       imgURL: 'https://variety.com/wp-content/uploads/2014/02/vikings-tv-review.jpg?w=681&h=383&crop=1',
//       type: 'History',
//       tags: ['webseries, Netflix']
//     }
//   ];

//   constructor() {}
// }

import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { TypeFilterPipe } from '../type-filter.pipe';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contentList: Content[] = [
    { id: 1, title: 'Inception', description: 'Inception', creator: 'Christopher Nolan', imgURL:'https://occ-0-33-987.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRO7wCHTwNucNkQ1jGsVVQj7mn5HFo28f1JnePEK37bAlWVFUI1hnay7nrEU2TFzBMWAhtjmsltPsos-Z_hxhy9SMU8UQDNiQjws.jpg?r=9d5', type: 'type1', tags: ['action, drama'] },
    { id: 2, title: 'Titanic', description: 'Titanic', creator: 'James Cameron', imgURL:'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png', type: 'type2', tags: ['action, drama'] },
    { id: 3, title: 'romeo and juliet ', description: 'romeo and juliet ', creator: 'Baz Luherman', imgURL:'https://hips.hearstapps.com/hmg-prod/images/7040-16-9-r-1635847742.jpg', type: 'type2', tags: ['action, drama'] },
    { id: 4, title: 'Shutter Island', description: 'Shutter island', creator: 'Creator 1', imgURL:'https://m.media-amazon.com/images/I/51cJfE3YuML._AC_SY445_.jpg', type: 'type1', tags: ['action, drama'] },
    { id: 5, title: 'Content 1', description: 'Description 1', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
    { id: 6, title: 'Content 1', description: 'Description 1', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
    { id: 7, title: 'Content 1', description: 'Description 1', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
  ];


searchTitle: string = '';
foundContent: boolean = false;

constructor() { }

searchContent() {
  this.foundContent = this.contentList.some(content => content.title === this.searchTitle);
  return this.foundContent;
}


}


