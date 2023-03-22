"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultToggleSwitch = void 0;
const react_1 = __importStar(require("react"));
const ToggleSwitch_1 = __importDefault(require("../../elements/ToggleSwitch"));
const card_1 = __importDefault(require("../../elements/card"));
const containers_1 = require("../containers");
exports.DefaultToggleSwitch = (args) => {
    const [active, setActive] = react_1.useState(false);
    return (react_1.default.createElement(card_1.default, null,
        react_1.default.createElement(containers_1.Column, null,
            react_1.default.createElement(ToggleSwitch_1.default, Object.assign({}, args, { active: active || args.active, label: "Text Here", onClick: (active) => setActive(active) })))));
};
exports.DefaultToggleSwitch.parameters = {
    docs: {
        source: {
            code: `
import ToggleSwitch from 'core/elements/toggle'

const MyComponent = () => {
  const [active, setActive] = useState(false)
  return (
    <ToggleSwitch
      label="Text Here"
      active={active}
      onClick={(active) => setActive(active)}
    />
  )
}
`,
        },
    },
};
exports.DefaultToggleSwitch.args = {
    active: false,
    disabled: false,
};
const ToggleSwitchStories = {
    title: 'Elements/ToggleSwitch',
    component: ToggleSwitch_1.default,
    argTypes: {
        active: {
            control: { type: 'boolean' },
            description: 'Defines the active state of the toggle switch',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Defines the disabled state of the toggle switch',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
    },
};
exports.default = ToggleSwitchStories;
//# sourceMappingURL=toggle.stories.js.map