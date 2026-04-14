"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProtectedRoute;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function ProtectedRoute({ children, }) {
    const token = localStorage.getItem("token");
    if (!token) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/doctor-access" });
    }
    return children;
}
//# sourceMappingURL=ProtectedRoute.js.map