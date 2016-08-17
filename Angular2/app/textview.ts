import {Component} from 'angular2/core';

@Component({
	selector: 'click-me',
	template: `
	<input #box (keyup)="clickMessage=box.value">
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
    `
})


export class ClickMeComponent {
	clickMessage = '';

	onClickMe() {
		console.log(this.clickMessage);
	}
}