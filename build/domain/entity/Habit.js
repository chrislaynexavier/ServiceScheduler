"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habit = void 0;
var Habit = /** @class */ (function () {
    function Habit(name) {
        this.dailiesHabits = [];
        this.name = name;
    }
    Habit.prototype.addDailyHabit = function (dailyHabit) {
        this.dailiesHabits.push(dailyHabit);
        dailyHabit.habit = this;
    };
    return Habit;
}());
exports.Habit = Habit;
