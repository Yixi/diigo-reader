import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DiigoService {

  constructor(private http: Http) { }

  getUserInfo(): Promise<any> {
    return this.http.get('http://localhost:6622/diigo/interact_api/load_user_info')
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
