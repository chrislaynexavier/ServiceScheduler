"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyHabit = void 0;
var DailyHabit = /** @class */ (function () {
    function DailyHabit(date) {
        this.checked = false;
        this.date = date;
    }
    DailyHabit.prototype.toggleCheck = function () {
        this.checked = !this.checked;
    };
    return DailyHabit;
}());
exports.DailyHabit = DailyHabit;
