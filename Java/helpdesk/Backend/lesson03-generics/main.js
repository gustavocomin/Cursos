"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var person_1 = require("../lesson01-classes/person");
var dao = new dao_1.Dao();
var person = new person_1.Person('Michael');
dao.insert(person);
//# sourceMappingURL=main.js.map