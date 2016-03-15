System.register(['angular2/core', './comic.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comic_service_1, router_1;
    var ComicComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comic_service_1_1) {
                comic_service_1 = comic_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ComicComponent = (function () {
                function ComicComponent(_comicService, _routeParams) {
                    this._comicService = _comicService;
                    this._routeParams = _routeParams;
                }
                ComicComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._comicService.getComic(id).then(function (comic) { return _this.comic = comic; });
                };
                ComicComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ComicComponent = __decorate([
                    core_1.Component({
                        selector: 'comic',
                        inputs: ['comic'],
                        templateUrl: 'app/comic.component.html'
                    }), 
                    __metadata('design:paramtypes', [comic_service_1.ComicService, router_1.RouteParams])
                ], ComicComponent);
                return ComicComponent;
            }());
            exports_1("ComicComponent", ComicComponent);
        }
    }
});
//# sourceMappingURL=comic.component.js.map