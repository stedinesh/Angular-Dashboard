import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  api = {
    customerDataCheck: {
      workflowId: '',
      processId: '',
      projectId: ''
    },
  }
}

