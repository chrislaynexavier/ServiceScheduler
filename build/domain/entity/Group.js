"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(name) {
        this.habits = [];
        this.users = [];
        this.dailiesHabits = [];
        this.name = name;
    }
    Group.prototype.addHabit = function (habit) {
        this.habits.push(habit);
    };
    Group.prototype.addUser = function (user) {
        this.users.push(user);
        user.groups.push(this);
    };
    Group.prototype.addDailyHabit = function (dailyHabit, habit) {
        habit.addDailyHabit(dailyHabit);
        this.dailiesHabits.push(dailyHabit);
        dailyHabit.group = this;
    };
    return Group;
}());
exports.Group = Group;
