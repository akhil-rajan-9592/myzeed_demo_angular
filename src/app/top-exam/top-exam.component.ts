import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-top-exam',
  templateUrl: './top-exam.component.html',
  styleUrls: ['./top-exam.component.scss']
})
export class TopExamComponent implements OnInit {

  allexams:any
  constructor(private dataservice : DataServicesService) {
    this.getAllExams()
  }

  ngOnInit(): void {
  }

  getAllExams(){
    this.dataservice.getallexams()
    .subscribe((data)=>{
      this.allexams = data
    },(error)=>{
      console.log(error);

    })
  }
}
