import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor() { }
  @Input() trainerHide:boolean = true
  @Input() trainerShow:boolean = false
  ngOnInit(): void {
  }

}
