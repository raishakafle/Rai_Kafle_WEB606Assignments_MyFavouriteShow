import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';
import { Content } from '../helper-files/content-interface'; // Replace with the actual path to your Content interface

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content: Content | undefined;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contentService.getContentById(id).subscribe(content => {
      this.content = content;
     
      if (content) {
        this.messageService.add(`Content retrieved: ID - ${content.id}, Title - ${content.title}`);
      }
    });
  }
}