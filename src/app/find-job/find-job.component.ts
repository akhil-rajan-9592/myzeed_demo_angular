import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit {

  alljobs:any
  filterjob:any
  constructor(private dataservice : DataServicesService,) {
    this.getAllJobs()
  }

  ngOnInit(): void {
  }

  getAllJobs(){
    this.dataservice.getalljobs()
    .subscribe((data)=>{
      this.alljobs = data
      this.filterjob = this.alljobs.Data
    },(error)=>{
      console.log(error);

    })
  }

  filter(typeName:any){
    if(typeName.target.checked == true && typeName.target.id=='customCheck'){
      this.getAllJobs()
    }
    else if(typeName.target.checked == true && typeName.target.id=='customCheck1'){
      this.filterjob = this.alljobs.Data.filter((obj:any)=>obj.type_of_job == 'full time')
    }
    else if(typeName.target.checked == true && typeName.target.id=='customCheck2'){
      this.filterjob = this.alljobs.Data.filter((obj:any)=>obj.type_of_job == 'part time')
    }
    else if(typeName.target.checked == true && typeName.target.id=='customCheck3'){
      this.filterjob = this.alljobs.Data.filter((obj:any)=>obj.type_of_job == 'remote')
    }
    else{
      this.getAllJobs()
    }
  }
}
