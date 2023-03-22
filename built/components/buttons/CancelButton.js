"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/styles");
const button_1 = __importDefault(require("../../elements/button"));
const styles = (theme) => ({
    baseButton: {
    // margin: theme.spacing(1),
    },
});
const CancelButton = (_a) => {
    var { children, classes, disabled } = _a, rest = __rest(_a, ["children", "classes", "disabled"]);
    const params = Object.assign({ className: classes.baseButton, disabled }, rest);
    return (react_1.default.createElement(button_1.default, Object.assign({ className: classes.baseButton }, params), children || 'Cancel'));
};
exports.default = (0, styles_1.withStyles)(styles)(CancelButton);
//# sourceMappingURL=CancelButton.js.map