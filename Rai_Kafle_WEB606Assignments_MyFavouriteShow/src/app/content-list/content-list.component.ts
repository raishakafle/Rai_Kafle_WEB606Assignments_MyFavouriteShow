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
    { id: 1, title: 'Stranger Things', description: '"Stranger Things" is a thrilling sci-fi series set in 1980s Hawkins, where a group of friends encounter supernatural forces and unravel a web of mysteries when one of them goes missing.', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
    { id: 2, title: 'Game of Thrones', description: '"Game of Thrones" is an epic fantasy television series known for its intricate political intrigue, complex characters, and battles for power in the fictional continents of Westeros and Essos.', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, romance'] },
    { id: 3, title: 'Jane The Virgin', description: '"Jane the Virgin" is a heartfelt and comedic television series that tells the story of Jane Villanueva, a young woman whose life takes a dramatic turn when she is accidentally artificially inseminated, leading to unexpected and humorous situations in her personal and romantic life.', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['action, drama'] },
    { id: 4, title: 'Chernobyl', description: '"Chernobyl" is a gripping historical drama miniseries based on the catastrophic nuclear disaster that occurred in 1986 at the Chernobyl Nuclear Power Plant in Soviet Ukraine, portraying the events leading up to the explosion, the immediate aftermath, and the ensuing efforts to contain the devastating consequences.', creator: 'Creator 1', imgURL:'', type: 'type1', tags: ['thriller, drama'] },
    { id: 5, title: 'Young Sheldon', description: '"Young Sheldon" is a charming comedy series that serves as a prequel to "The Big Bang Theory," focusing on the childhood of Sheldon Cooper, a brilliant but socially awkward prodigy, as he navigates school, family life, and the challenges of growing up in East Texas.', creator: 'Creator 1', imgURL:'', type: 'type2', tags: ['romance, action'] },
    { id: 6, title: 'Black Widow', description: '"Black Widow" is a thrilling action-packed series that delves into the espionage-filled world of Natasha Romanoff, a former KGB assassin turned Avenger, as she confronts her past and uncovers dark secrets.', creator: 'Creator 1', imgURL:'', type: 'type2', tags: ['horror'] },
    { id: 7, title: 'Loki', description: '"Loki" is a captivating series that follows the mischievous and unpredictable Loki, the god of mischief, as he embarks on a time-bending adventure that challenges his identity and explores the vast complexities of the Marvel Cinematic Universe.', creator: 'Creator 1', imgURL:'', type: 'type2', tags: ['romance, drama'] },
  ];


searchTitle: string = '';
foundContent: boolean = false;

constructor() { }

searchContent() {
  this.foundContent = this.contentList.some(content => content.title === this.searchTitle);
  return this.foundContent;
}


}  