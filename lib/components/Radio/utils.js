"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusOfRadio = exports.getIconByStatus = void 0;
var RadioTick_1 = __importDefault(require("lms-icons/components/RadioTick"));
var RadioUntick_1 = __importDefault(require("lms-icons/components/RadioUntick"));
var types_1 = require("./types");
var mapOfIcons = (_a = {},
    _a[types_1.RadioStatuses.unchecked] = RadioUntick_1.default,
    _a[types_1.RadioStatuses.checked] = RadioTick_1.default,
    _a);
var getIconByStatus = function (status) { return mapOfIcons[status]; };
exports.getIconByStatus = getIconByStatus;
var getStatusOfRadio = function (checked) {
    return !checked ? types_1.RadioStatuses.unchecked : types_1.RadioStatuses.checked;
};
exports.getStatusOfRadio = getStatusOfRadio;
//# sourceMappingURL=utils.js.map