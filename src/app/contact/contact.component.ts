import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  @Input() contactHide:boolean = true
  @Input() contactShow:boolean = false
  ngOnInit(): void {
    
  }


}
