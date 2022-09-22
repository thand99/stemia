import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidatorService } from 'src/app/service/validate.service';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:ValidatorService) { }
  getLhomeId:any;
  subData:any;

  ngOnInit(): void {
    this.getLhomeId = this.param.snapshot.paramMap.get('id');
    console.log(this.getLhomeId,'getlhome');
    if(this.getLhomeId)
    {
      this.subData = this.service.subDetails.filter((value)=>{
          return value.id == this.getLhomeId
        });
        console.log(this.subData, 'subdata>>')
    }
  }

}
