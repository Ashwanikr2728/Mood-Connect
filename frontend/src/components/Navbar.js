"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navbar;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
function Navbar() {
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [open, setOpen] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const token = localStorage.getItem("token");
    (0, react_1.useEffect)(() => {
        if (!token)
            return;
        axios_1.default
            .get("http://localhost:3000/api/v1/user/me", {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
            .then((res) => setFirstName(res.data.firstName))
            .catch((err) => console.log(err));
    }, []);
    function logout() {
        localStorage.removeItem("token");
        navigate("/signin");
    }
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "w-full flex items-center justify-between px-10 py-4 fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-xl border-b border-gray-200/50", children: [(0, jsx_runtime_1.jsxs)("div", { onClick: () => navigate("/"), className: "flex items-center gap-3 cursor-pointer group", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition", children: "M" }), (0, jsx_runtime_1.jsx)("span", { className: "text-lg font-semibold text-gray-800 tracking-wide 0 transition", children: "MindSupportAI" })] }), (0, jsx_runtime_1.jsx)("div", { className: "hidden md:flex items-center gap-8 text-gray-600 font-medium", children: ["Home", "Features", "Safety", "About"].map((item) => ((0, jsx_runtime_1.jsxs)("a", { href: `#${item.toLowerCase()}`, className: "relative group", children: [(0, jsx_runtime_1.jsx)("span", { className: "group-hover:text-blue-600 transition", children: item }), (0, jsx_runtime_1.jsx)("span", { className: "absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" })] }, item))) }), token ? ((0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { onClick: () => setOpen(!open), className: "flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl shadow-md cursor-pointer border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold", children: firstName?.charAt(0).toUpperCase() }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col leading-tight", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-xs text-gray-500", children: "Welcome back" }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold text-gray-800", children: firstName })] })] }), open && ((0, jsx_runtime_1.jsx)("div", { className: "absolute right-0 top-14 w-44 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl overflow-hidden", children: (0, jsx_runtime_1.jsx)("button", { onClick: logout, className: "w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition", children: "Logout" }) }))] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signin", children: (0, jsx_runtime_1.jsx)("button", { className: "px-5 py-2 rounded-lg text-gray-600 font-medium hover:text-blue-600 hover:bg-blue-50 transition", children: "Login" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", children: (0, jsx_runtime_1.jsxs)("button", { className: "relative px-6 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-blue-500 to-purple-500 shadow-lg overflow-hidden group", children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition" }), (0, jsx_runtime_1.jsx)("span", { className: "relative z-10", children: "Get Started" })] }) })] }))] }));
}
//# sourceMappingURL=Navbar.js.map