"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SigninPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Input_1 = __importDefault(require("../components/Input"));
const axios_1 = __importDefault(require("axios"));
function SigninPage() {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    async function signin() {
        const response = await axios_1.default.post("http://localhost:3000/api/v1/user/signin", {
            email,
            password,
        });
        console.log(response.data);
        const token = response.data.token;
        const role = response.data.role;
        localStorage.setItem("token", token);
        if (role == "DOCTOR") {
            navigate("/doctor/dashboard");
        }
        else {
            navigate("/home");
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen w-full flex items-center justify-end relative overflow-hidden", style: {
            backgroundImage: "url('/src/assets/signin-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-white/10 via-white/70 to-transparent" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => navigate(-1), className: "absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-xl \r\n    bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 \r\n    hover:bg-white/30 hover:scale-[1.03] transition shadow-sm", children: "\u2190 Back" }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute left-10 md:left-20 top-28 md:top-32 z-10 max-w-md", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-bold leading-tight mb-4 text-gray-800", children: "Welcome Back" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Continue your journey towards better mental well-being with AI-powered support." })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-20 left-40 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10 w-full max-w-md mr-10 md:mr-20 \r\n    bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-8", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold text-gray-900 mb-1", children: "Welcome Back" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 mb-6 text-sm", children: "Log in to your account" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { onChange: (e) => setEmail(e.target.value), type: "email", placeholder: "Email" }), (0, jsx_runtime_1.jsx)(Input_1.default, { onChange: (e) => setPassword(e.target.value), type: "password", placeholder: "Password" })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-right mt-2", children: (0, jsx_runtime_1.jsx)("span", { className: "text-sm text-blue-600 cursor-pointer hover:underline", children: "Forgot password?" }) }), (0, jsx_runtime_1.jsx)("button", { onClick: signin, className: "w-full mt-5 py-3 rounded-xl font-semibold text-white \r\n      bg-linear-to-r from-blue-500 to-purple-500 shadow-md \r\n      hover:scale-[1.03] hover:shadow-lg transition", children: "Log In" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center my-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-1 h-px bg-gray-200" }), (0, jsx_runtime_1.jsx)("span", { className: "mx-3 text-xs text-gray-400", children: "OR" }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 h-px bg-gray-200" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-gray-500 text-center", children: ["Don\u2019t have an account?", " ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", children: (0, jsx_runtime_1.jsx)("span", { className: "text-blue-600 cursor-pointer hover:underline", children: "Sign up" }) })] })] })] }));
}
//# sourceMappingURL=Signin.js.map