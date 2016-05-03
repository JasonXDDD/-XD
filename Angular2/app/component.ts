import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {SitemService} from './sitemDataService';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
	selector:'sitems',
	directives: [NgFor],
	providers: [SitemService, HTTP_PROVIDERS],
	templateUrl: 'template/sitem.html'
})

export class Sitem{
	sitems: Array<Object> = [];
	constructor(service: SitemService){
		console.log(service.httpGet());
	}

}