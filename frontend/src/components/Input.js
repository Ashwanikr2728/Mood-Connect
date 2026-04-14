"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InputField = ({ type = "text", placeholder, value, onChange, }) => {
    return ((0, jsx_runtime_1.jsx)("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, className: "w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder-gray-400" }));
};
exports.default = InputField;
//# sourceMappingURL=Input.js.map