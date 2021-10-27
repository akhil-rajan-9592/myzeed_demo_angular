import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http:HttpClient) {

  }

  getalljobs(){
    return this.http.get('http://dev3.webcastle.in/myzeed/api/user/getJobs')
  }
  getallexams(){
    return this.http.get('http://dev3.webcastle.in/myzeed/api/user/getExams')
  }

  addrequestform(data:any){
    return this.http.post('http://dev3.webcastle.in/myzeed/api/user/appointment',data)
  }
}
