import { Injectable } from '@angular/core';
import { of } from 'rxjs';

//import { LoginStoreService } from '@services/login-store.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor() { }

  customerDataCheck(data: { customerIdNumber: any; }){

    const customerData: any = [
      {
        customerId: '122112',
        name: 'Dinesh',
        mobileNo:'8807411438',
        address:'No 275 kovil street,Nayambadi',
        city:'Tiruvannamalai',
        fullName:'Dinesh Shankar Palani',
        firstName:'Dinesh',
        middleName:'Shankar',
        lastName:'Palani',
        email:'stedinesh@gmail.com',
        nationality:'indian',
        occupation:'Software Developer',
        religion:'Hindu',
        maritalStatus:'single',

      },
      {
        customerId: '122113',
        name: 'Rajesh',
        mobileNo:'9834902830',
        address:'No 277 kovil street,Trichy',
        city:'Trichy',
        fullName:'Rajesh Ramaraj aanaimuthu',
        firstName:'Rajesh',
        middleName:'Ramaraj',
        lastName:'aanaimuthu',
        email:'rajeshR@gmail.com',
        nationality:'indian',
        occupation:'Software Developer',
        religion:'Hindu',
        maritalStatus:'single',

      },
      {
        customerId: '122114',
        name: 'Clament',
        mobileNo:'8978978969',
        address:'No 274 kovil street,kalpattu',
        city:'Vilupuram',
        fullName:'Clament Christopher Raj',
        firstName:'Clament',
        middleName:'Christopher',
        lastName:'Raj',
        email:'christoRaj@gmail.com',
        nationality:'indian',
        occupation:'Software Developer',
        religion:'Hindu',
        maritalStatus:'Married',

      }
    ]
    const processData = data;
    const filteredData = customerData.filter((customer: any) => customer.customerId === data.customerIdNumber);
    return of(filteredData);
   
  }



}
