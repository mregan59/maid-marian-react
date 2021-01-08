"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryB = exports.PrimaryA = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = require("./Button");
exports.default = {
    title: 'Button',
    component: Button_1.Button,
    argTypes: {
        onClick: { action: 'clicked' }
    }
};
const Template = (args) => (react_1.default.createElement(Button_1.Button, Object.assign({}, args)));
exports.PrimaryA = Template.bind({});
exports.PrimaryA.args = {
    color: 'primary',
    variant: 'contained',
    children: 'Primary Args',
};
exports.PrimaryB = Template.bind({});
exports.PrimaryB.args = {
    color: 'secondary',
    variant: 'contained',
    children: 'Primary Args',
};
{
}
