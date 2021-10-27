import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  submitted = false
  constructor(private dataservice : DataServicesService,public fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  addrequest = this.fb.group({
    name : ['',[Validators.required]],
    phone : ['',[Validators.required]],
    email : ['',[Validators.required]],
    message : ['',[Validators.required]],
    options :this.fb.array([]),
    lorem : ['']
  })
  get myForm() {
    return this.addrequest.controls;
  }

  checkBox(e:any){
    const options: FormArray = this.addrequest.get('options') as FormArray;
    if (e.target.checked) {
      options.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      options.controls.forEach((item) => {
        if (item.value == e.target.value) {
          options.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submit(){
    this.submitted = true
    if(this.addrequest.valid){
      console.log(this.addrequest.value);
      let data = {
        "email" : this.addrequest.value.email,
        "message": this.addrequest.value.message,
        "name": this.addrequest.value.name,
        "option": this.addrequest.value.options,
        "phone": this.addrequest.value.phone
      }
      this.dataservice.addrequestform(data)
      .subscribe((data)=>{
        if(data){
          alert('Form is submitted')
        }
      },err=>{
        console.log(err);

      })
    }
  }

}
