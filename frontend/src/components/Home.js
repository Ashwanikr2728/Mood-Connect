"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const Feature_sec_1 = __importDefault(require("./Feature-sec"));
const Footer_1 = __importDefault(require("./Footer"));
const Hero_sec_1 = __importDefault(require("./Hero-sec"));
const Prob_sec_1 = __importDefault(require("./Prob-sec"));
const Safety_sec_1 = __importDefault(require("./Safety-sec"));
function Home() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-green-200", children: [(0, jsx_runtime_1.jsx)(Hero_sec_1.default, {}), (0, jsx_runtime_1.jsx)(Feature_sec_1.default, {}), (0, jsx_runtime_1.jsx)(Prob_sec_1.default, {}), (0, jsx_runtime_1.jsx)(Safety_sec_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
//# sourceMappingURL=Home.js.map