"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DoctorAccess;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const FirstNav_1 = __importDefault(require("../components/FirstNav"));
const Input_1 = __importDefault(require("../components/Input"));
const axios_1 = __importDefault(require("axios"));
function DoctorAccess() {
    const [secret, setSecret] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    async function handleVerify() {
        try {
            await axios_1.default.post("http://localhost:3000/api/v1/doctor/verify", {
                secret,
            });
            localStorage.setItem("secret", secret);
            navigate("/doctor/signup");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (err) {
            alert(err.response?.data?.message || "Invalid secret code");
        }
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(FirstNav_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-7", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl mb-2", children: "\uD83E\uDE7A" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-semibold text-gray-800", children: "Doctor Access" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 mt-2 text-sm", children: "Secure entry for verified professionals" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm font-medium text-gray-600", children: "Secret Code" }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "password", placeholder: "Enter your access code", onChange: (e) => setSecret(e.target.value) })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleVerify, className: "w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition", children: "Verify & Continue" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-xs text-gray-400", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-1 h-px bg-gray-200" }), "Secure Access", (0, jsx_runtime_1.jsx)("div", { className: "flex-1 h-px bg-gray-200" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-400 text-center", children: "Unauthorized access is strictly prohibited" })] }) })] }));
}
//# sourceMappingURL=DoctorAccess.js.map