

import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { TypeFilterPipe } from '../type-filter.pipe';
import { ShowService } from '../services/show.service';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contentList: Content[] = [
    // { id: 1, title: 'Inception', description: 'Inception', creator: 'Christopher Nolan', imgURL:'https://occ-0-33-987.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRO7wCHTwNucNkQ1jGsVVQj7mn5HFo28f1JnePEK37bAlWVFUI1hnay7nrEU2TFzBMWAhtjmsltPsos-Z_hxhy9SMU8UQDNiQjws.jpg?r=9d5', type: 'type1', tags: ['action, drama'] },
    // { id: 2, title: 'Titanic', description: 'Titanic', creator: 'James Cameron', imgURL:'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png', type: 'type2', tags: ['action, drama'] },
    // { id: 3, title: 'romeo and juliet ', description: 'romeo and juliet ', creator: 'Baz Luherman', imgURL:'https://hips.hearstapps.com/hmg-prod/images/7040-16-9-r-1635847742.jpg', type: 'type2', tags: ['action, drama'] },
    // { id: 4, title: 'Shutter Island', description: 'Shutter island', creator: 'Creator 1', imgURL:'https://m.media-amazon.com/images/I/51cJfE3YuML._AC_SY445_.jpg', type: 'type1', tags: ['action, drama'] },
    // { id: 5, title: 'Content 1', description: 'Description 1', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
    // { id: 6, title: 'Content 1', description: 'Description 1', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
    // { id: 7, title: 'Content 1', description: 'Description 1', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
  ];


searchTitle: string = '';
foundContent: boolean = false;
// Assignment 6 --
constructor(private showService: ShowService) { }

ngOnInit(): void {
  this.retrieveContentArray();
}

retrieveContentArray(): void {
  this.showService.getContentArray().subscribe(contentArray => {
    this.contentList = contentArray;
  });
}

// A 6 

searchContent() {
  this.foundContent = this.contentList.some(content => content.title === this.searchTitle);
  return this.foundContent;
}


}


