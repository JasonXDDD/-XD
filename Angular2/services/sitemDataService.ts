import {Injectable, Inject} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class SitemService{

	constructor (private http: Http) {}

	httpGet(){
		var headers = new Headers();
		// headers.append("name", "value");


		return this.http.get("./services/resault.json")
			.map(res => res.json())
			.do(data => console.log(data)) // eyeball results in the console
			.catch(this.handleError);
	}

	private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}