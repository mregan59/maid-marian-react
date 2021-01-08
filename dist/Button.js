"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
exports.Button = styled_components_1.default(Button_1.default) `
  font-size: 1em;
  margin: 1em;
  padding: 15px;
  border-radius: 3px;
`;
