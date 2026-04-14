"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroSection;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./Navbar"));
function HeroSection() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const token = localStorage.getItem("token");
    return ((0, jsx_runtime_1.jsxs)("div", { id: "home", className: "w-full min-h-screen relative flex flex-col overflow-hidden", style: {
            backgroundImage: "url('/src/assets/home-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-transparent" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl animate-pulse" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-20 right-20 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl animate-pulse" }), (0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "relative flex flex-1 items-center px-8 md:px-20", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-xl space-y-6", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fadeInUp", children: ["AI-Driven Mental", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { className: "bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", children: "Well-Being Support" }), (0, jsx_runtime_1.jsx)("br", {}), "Platform"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-lg animate-fadeInUp delay-150", children: "A confidential platform for emotional support, safe peer connection, and early risk indication." }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm animate-fadeInUp delay-300", children: "* This platform does not provide diagnosis or therapy." }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-4 mt-6 animate-fadeInUp delay-500", children: token ? ((0, jsx_runtime_1.jsx)("button", { onClick: () => navigate("/user-dashboard"), className: "px-6 py-3 rounded-xl font-semibold text-white \r\n            bg-linear-to-r from-blue-500 to-purple-500 shadow-lg \r\n            hover:scale-105 hover:shadow-xl transition", children: "Go to Dashboard" })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", children: (0, jsx_runtime_1.jsxs)("button", { className: "group relative px-6 py-3 rounded-xl font-semibold text-white \r\n  bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500\r\n  shadow-lg hover:shadow-2xl \r\n  transition-all duration-300 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" }), (0, jsx_runtime_1.jsxs)("span", { className: "relative flex items-center gap-2", children: ["Get Started", (0, jsx_runtime_1.jsx)("span", { className: "transform group-hover:translate-x-1 transition duration-300", children: "\u2192" })] })] }) })) })] }) })] }));
}
//# sourceMappingURL=Hero-sec.js.map