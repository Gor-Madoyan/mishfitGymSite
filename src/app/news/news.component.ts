import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
  
  @Input() newsHide:boolean = true
  @Input() newsShow:boolean = false
  ngOnInit(): void {
  }

}
