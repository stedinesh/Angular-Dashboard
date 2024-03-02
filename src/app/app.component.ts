import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomerDataService } from './modules/service/customer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  customerDetailForm: any
  leadId: any
  isCustomerAvailable = false;
  loginForm: FormGroup | undefined;
  searchText = '';
  customerForm: FormControl = new FormControl();
  customer: any;

  constructor(
    private customerDataService: CustomerDataService) {

  }
  ngOnInit() {
  }

  customerDataCheck(searchData: any) {
    const data = {
      customerIdNumber: searchData
    }
    this.customerDataService.customerDataCheck(data).subscribe((res: any) => {
      this.customer = res[0];
      this.isCustomerAvailable = !!this.customer;
    });
  }
initform(){
  
}
searchCustomer() {
  const fullText = this.searchText;
  if (fullText) {
    this.customerDataCheck(fullText);
  }
}


}
