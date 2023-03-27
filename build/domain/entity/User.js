"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, password) {
        this.dailiesHabits = [];
        this.groups = [];
        this.email = email;
        this.password = password;
    }
    User.prototype.addDailyHabit = function (dailyHabit) {
        this.dailiesHabits.push(dailyHabit);
        dailyHabit.user = this;
    };
    return User;
}());
exports.User = User;
