import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  @Input() hideService:boolean = false
  @Input() showService:boolean = true
  ngOnInit(): void {
  }

}
