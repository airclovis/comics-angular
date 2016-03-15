import {Comic} from './comic';
import {Component, OnInit} from 'angular2/core';
import {ComicService} from './comic.service';
import {RouteParams} from 'angular2/router';


@Component({
    selector: 'comic',
    inputs: ['comic'],
    templateUrl: 'app/comic.component.html'    
})

export class ComicComponent {
    public comic: Comic;

    constructor(private _comicService: ComicService, private _routeParams: RouteParams) {}

    ngOnInit(){
	let id = +this._routeParams.get('id');
	this._comicService.getComic(id).then(comic => this.comic = comic);
    }

    goBack(){
	window.history.back();
    }
}
