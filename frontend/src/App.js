"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Signup_1 = __importDefault(require("./routes/Signup"));
const Signin_1 = __importDefault(require("./routes/Signin"));
const Home_1 = __importDefault(require("./components/Home"));
const docSignup_1 = __importDefault(require("./routes/docSignup"));
const EntryChoice_1 = __importDefault(require("./routes/EntryChoice"));
const DoctorAccess_1 = __importDefault(require("./routes/DoctorAccess"));
const DocDashboard_1 = __importDefault(require("./routes/DocDashboard"));
const ProtectedRoute_1 = __importDefault(require("./components/ProtectedRoute"));
const UserDashboard_1 = __importDefault(require("./routes/UserDashboard"));
const userProtectedRoute_1 = __importDefault(require("./components/userProtectedRoute"));
const Chat_1 = __importDefault(require("./routes/Chat"));
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(EntryChoice_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/doctor-access", element: (0, jsx_runtime_1.jsx)(DoctorAccess_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/doctor/dashboard", element: (0, jsx_runtime_1.jsx)(ProtectedRoute_1.default, { children: (0, jsx_runtime_1.jsx)(DocDashboard_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/chat", element: (0, jsx_runtime_1.jsx)(Chat_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/home", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(Signup_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signin", element: (0, jsx_runtime_1.jsx)(Signin_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/user-dashboard", element: (0, jsx_runtime_1.jsx)(userProtectedRoute_1.default, { children: (0, jsx_runtime_1.jsx)(UserDashboard_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/doctor/signup", element: (0, jsx_runtime_1.jsx)(docSignup_1.default, {}) })] }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map