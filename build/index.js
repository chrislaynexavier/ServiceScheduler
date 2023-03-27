"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var Pool = require("pg").Pool;
var client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: '5432'
});
var connectDb = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.connect()];
            case 1:
                _a.sent();
                console.log('conectado');
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
app.use(express.json());
app.post('/habit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query("insert into habits (name) values ($1)", [req.body.name])];
            case 1:
                _a.sent();
                res.json({ req: 'habit added sucessfully' });
                return [2 /*return*/];
        }
    });
}); });
app.get('/habit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = null;
                if (!req.query.id_group) return [3 /*break*/, 2];
                return [4 /*yield*/, client.query('select * from habits where id_group = $1', [req.query.id_group])];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, client.query('select * from habits')];
            case 3:
                response = _a.sent();
                _a.label = 4;
            case 4:
                res.json(response.rows);
                return [2 /*return*/];
        }
    });
}); });
app.put('/habit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = null;
                if (!isNaN(req.query.id_habit)) return [3 /*break*/, 1];
                res.status(404).send('the id need be a number');
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, client.query('update habits set name = $1 WHERE id = $2 returning *', [req.query.name, req.query.id_habit], function (err, result) {
                    if (err) {
                        res.status(500).send('error editing habit');
                    }
                    else {
                        if (result.rowCount === 0) {
                            res.status(404).send("No habit found to edit.");
                        }
                        else {
                            res.status(200).send('Successfully edited habit');
                        }
                    }
                })];
            case 2:
                response = _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
app.delete('/habit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = null;
                if (!req.body.id) return [3 /*break*/, 2];
                return [4 /*yield*/, client.query('delete from habits where id = $1 returning *', [req.body.id], function (err, result) {
                        if (err) {
                            res.status(500).send('error deleting habit');
                        }
                        else {
                            var numLines = result.rowCount;
                            if (numLines === 0) {
                                res.status(404).send("No habit found for deletion.");
                            }
                            else {
                                res.status(200).send("".concat(numLines, " habit(s) deleted."));
                            }
                        }
                    })];
            case 1:
                response = _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
app.post('/dailyhabit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query('insert into dailyHabit (dailyhabit_date, id_user, id_habit, id_group, checked) values ($1, $2, $3, $4, $5)', [req.body.date, req.body.id_user, req.body.id_habit, req.body.id_group, false])];
            case 1:
                _a.sent();
                res.json({ req: 'daily habit added sucessfully' });
                return [2 /*return*/];
        }
    });
}); });
app.put('/dailyhabit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, updatedDailyHabit, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.query.id_dailyhabit);
                if (isNaN(id)) {
                    res.status(400).send('id must be a number');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, client.query('UPDATE dailyhabit SET checked = NOT checked WHERE id = $1 RETURNING *', [id])];
            case 1:
                result = _a.sent();
                if (result.rowCount === 0) {
                    res.status(404).send("Daily habit with id ".concat(id, " not found"));
                }
                else {
                    updatedDailyHabit = result.rows[0].checked;
                    res.status(200).send("Successfully updated daily habit ".concat(id, ", checked: ").concat(updatedDailyHabit));
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send('Error editing daily habit');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/dailyhabit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = null;
                if (!req.query.id_user) return [3 /*break*/, 2];
                return [4 /*yield*/, client.query('select * from dailyhabit where id_user = $1', [req.query.id_user])];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 10];
            case 2:
                if (!req.query.id_group) return [3 /*break*/, 4];
                return [4 /*yield*/, client.query('select * from dailyhabit where id_group = $1', [req.query.id_group])];
            case 3:
                response = _a.sent();
                return [3 /*break*/, 10];
            case 4:
                if (!req.query.id_habit) return [3 /*break*/, 6];
                return [4 /*yield*/, client.query('select * from dailyhabit where id_habit = $1', [req.query.id_habit])];
            case 5:
                response = _a.sent();
                return [3 /*break*/, 10];
            case 6:
                if (!req.query.checked) return [3 /*break*/, 8];
                return [4 /*yield*/, client.query('select * from dailyhabit where checked = $1', [req.query.checked])];
            case 7:
                response = _a.sent();
                return [3 /*break*/, 10];
            case 8: return [4 /*yield*/, client.query('select * from dailyHabit')];
            case 9:
                response = _a.sent();
                _a.label = 10;
            case 10:
                res.json(response.rows);
                return [2 /*return*/];
        }
    });
}); });
app.delete('/dailyhabit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = null;
                if (!req.body.id) return [3 /*break*/, 2];
                return [4 /*yield*/, client.query('delete from dailyhabit where id = $1 returning *', [req.body.id], function (err, result) {
                        if (err) {
                            res.status(500).send('error deleting daily habit');
                        }
                        else {
                            var numLines = result.rowCount;
                            if (numLines === 0) {
                                res.status(404).send("No daily habit found for deletion.");
                            }
                            else {
                                res.status(200).send("".concat(numLines, " daily habit(s) deleted."));
                            }
                        }
                    })];
            case 1:
                response = _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
app.post('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query('insert into users (nameUser, passwordUser) values ($1, $2)', [req.body.name, req.body.password])];
            case 1:
                _a.sent();
                res.json({ req: 'user added sucessfully' });
                return [2 /*return*/];
        }
    });
}); });
app.get('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query('select * from users')];
            case 1:
                dbResponse = _a.sent();
                res.json(dbResponse.rows);
                console.log(dbResponse.rows);
                console.log('teste');
                return [2 /*return*/];
        }
    });
}); });
app.post('/group', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query('insert into groups (namegroup) values ($1)', [req.body.name])];
            case 1:
                _a.sent();
                res.json({ req: 'group added sucessfully' });
                return [2 /*return*/];
        }
    });
}); });
app.get('/group', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query('select * from groups')];
            case 1:
                dbResponse = _a.sent();
                res.json(dbResponse.rows);
                console.log(dbResponse.rows);
                return [2 /*return*/];
        }
    });
}); });
app.post('/add_user_group', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query('insert into relation_user_group (id_user, id_group) values ($1, $2)', [req.body.id_user, req.body.id_group])];
            case 1:
                _a.sent();
                res.json({ req: 'user added in group sucessfully' });
                return [2 /*return*/];
        }
    });
}); });
app.get('/add_user_group', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query('select * from relation_user_group')];
            case 1:
                dbResponse = _a.sent();
                res.json(dbResponse.rows);
                return [2 /*return*/];
        }
    });
}); });
app.listen(2000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    }
    else {
        connectDb();
        console.log("Servidor iniciado com sucesso");
    }
});
