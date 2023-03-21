"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
require("./app.css");
require("./static/fontawesome/css/all.min.css");
// FOR TESTING PURPOSES ONLY
const root = client_1.default.createRoot(document.getElementById('root'));
root.render(react_1.default.createElement(App_1.default, null));
//# sourceMappingURL=index.js.map