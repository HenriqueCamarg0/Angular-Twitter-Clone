import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frends',
  templateUrl: './frends.component.html',
  styleUrls: ['./frends.component.css']
})
export class FrendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicar(){
    alert('freends add');  
  }
  message(){
    alert('message enviada');  
  }

}
