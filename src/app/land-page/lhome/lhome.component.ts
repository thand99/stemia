import { Component, OnInit } from '@angular/core';
import { ValidatorService } from 'src/app/service/validate.service';

@Component({
  selector: 'app-lhome',
  templateUrl: './lhome.component.html',
  styleUrls: ['./lhome.component.css']
})
export class LhomeComponent implements OnInit {

  constructor(private servic:ValidatorService) { }
  subData:any;
  ngOnInit(): void {
    this.subData = this.servic.subDetails;
  }

}
