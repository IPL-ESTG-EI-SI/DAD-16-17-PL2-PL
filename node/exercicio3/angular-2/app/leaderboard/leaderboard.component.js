"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var leaderboard_service_1 = require('./leaderboard.service');
var LeaderboardComponent = (function () {
    function LeaderboardComponent(leaderboardService) {
        // this.leaderboard = [
        //         {name:'Albert Einstein',maxScore:9000,avatar:'https://api.adorable.io/avatars/285/albert.png'},
        //         {name:'Carl Sagan',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/carl.png'},
        //         {name:'Richard Feynman',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/richard.png'}
        //     ];
        var _this = this;
        this.leaderboardService = leaderboardService;
        this.leaderboardService.getLeaderboard()
            .subscribe(function (leaderboard) { return _this.leaderboard = leaderboard; });
    }
    LeaderboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'leaderboard',
            templateUrl: 'leaderboard.component.html'
        }), 
        __metadata('design:paramtypes', [leaderboard_service_1.LeaderboardService])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());
exports.LeaderboardComponent = LeaderboardComponent;
//# sourceMappingURL=leaderboard.component.js.map