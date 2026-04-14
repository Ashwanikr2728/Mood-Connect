"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Input_1 = __importDefault(require("../components/Input"));
const axios_1 = __importDefault(require("axios"));
function SignupPage() {
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [lastName, setLastName] = (0, react_1.useState)("");
    const [age, setAge] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [city, setCity] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    async function signup() {
        await axios_1.default.post("http://localhost:3000/api/v1/user/signup", {
            firstName,
            lastName,
            age,
            city,
            email,
            password,
        });
        alert("Signup successfull");
        navigate("/signin");
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen w-full flex items-center justify-end relative overflow-hidden", children: [(0, jsx_runtime_1.jsxs)("div", { className: "absolute inset-0", children: [(0, jsx_runtime_1.jsx)("img", { src: "/src/assets/signup-bg.png", alt: "background", className: "w-full h-full object-cover object-left" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-white/40" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-linear-to-br from-blue-200/30 via-transparent to-purple-200/30" })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute -top-25 -left-25 w-75 h-75 bg-blue-400/20 rounded-full blur-3xl" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute -bottom-30 -right-25 w-75 h-75 bg-purple-400/20 rounded-full blur-3xl" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-6 left-6 z-20", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => window.history.back(), className: "flex items-center gap-2 px-4 py-2 rounded-full \r\n    bg-white/70 backdrop-blur-lg border border-white/40 \r\n    shadow-md hover:shadow-lg \r\n    text-gray-700 text-sm font-medium\r\n    hover:bg-white/90 transition-all duration-300 group", children: [(0, jsx_runtime_1.jsx)("span", { className: "transform group-hover:-translate-x-1 transition duration-300", children: "\u2190" }), "Back"] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10 w-full max-w-md mr-20 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/30", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 mb-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-9 h-9 bg-linear-to-br from-blue-500 to-purple-500 rounded-full shadow-md" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-lg font-semibold text-gray-700 tracking-wide", children: "MindSupportAI" })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Create your account" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 mb-8 text-sm", children: "A safe space to reset, reflect, and grow." }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-5", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", placeholder: "First Name", onChange: (e) => setFirstName(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", placeholder: "Last Name", onChange: (e) => setLastName(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "number", placeholder: "Age", onChange: (e) => setAge(e.target.value === "" ? "" : Number(e.target.value)) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", placeholder: "City", onChange: (e) => setCity(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "email", placeholder: "Email", onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "password", placeholder: "Password", onChange: (e) => setPassword(e.target.value) })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center my-8", children: (0, jsx_runtime_1.jsx)("button", { onClick: signup, className: "w-full py-3.5 rounded-xl bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300", children: "Sign Up" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center my-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-1 h-px bg-gray-200" }), (0, jsx_runtime_1.jsx)("span", { className: "mx-3 text-xs text-gray-400 uppercase tracking-wide", children: "or" }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 h-px bg-gray-200" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-gray-500 text-center", children: ["Already have an account?", " ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signin", children: (0, jsx_runtime_1.jsx)("span", { className: "text-blue-600 font-medium hover:underline cursor-pointer", children: "Sign in" }) })] })] })] }));
}
//# sourceMappingURL=Signup.js.map