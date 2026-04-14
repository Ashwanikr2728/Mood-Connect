"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FirstNav;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function FirstNav() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("nav", { className: "w-full flex items-center px-10 py-4 fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200", children: (0, jsx_runtime_1.jsxs)("div", { onClick: () => navigate("/"), className: "flex items-center gap-3 cursor-pointer group", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-9 h-9 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold shadow-sm", children: "M" }), (0, jsx_runtime_1.jsx)("span", { className: "text-lg font-semibold text-gray-800 tracking-wide group-hover:text-blue-600 transition", children: "MindSupportAI" })] }) }));
}
//# sourceMappingURL=FirstNav.js.map