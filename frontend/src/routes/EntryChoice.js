"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntryChoice;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const FirstNav_1 = __importDefault(require("../components/FirstNav"));
function EntryChoice() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(FirstNav_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-purple-50 to-white px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-lg bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-semibold text-gray-800", children: "Get Started" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 mt-2 text-sm", children: "Choose how you want to continue" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { onClick: () => navigate("/signup"), className: "cursor-pointer p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition group", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-3xl mb-3", children: "\uD83D\uDC64" }), (0, jsx_runtime_1.jsx)("h2", { className: "font-semibold text-gray-800 group-hover:text-blue-600", children: "Continue as User" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500 mt-1", children: "Access AI support & explore doctors" })] }), (0, jsx_runtime_1.jsxs)("div", { onClick: () => navigate("/doctor-access"), className: "cursor-pointer p-6 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition group", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-3xl mb-3", children: "\uD83E\uDE7A" }), (0, jsx_runtime_1.jsx)("h2", { className: "font-semibold text-gray-800 group-hover:text-purple-600", children: "Continue as Doctor" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500 mt-1", children: "Verified professionals only" })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-400", children: "Secure & privacy-focused platform" })] }) })] }));
}
//# sourceMappingURL=EntryChoice.js.map