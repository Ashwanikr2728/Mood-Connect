"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserDashboard;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
const ProfileSection_1 = __importDefault(require("../components/dashboard/ProfileSection"));
const DoctorSection_1 = __importDefault(require("../components/dashboard/DoctorSection"));
const AiSection_1 = __importDefault(require("../components/dashboard/AiSection"));
const Tab_1 = __importDefault(require("../components/tabs/Tab"));
function UserDashboard() {
    const [users, setUsers] = (0, react_1.useState)(null);
    const [doctors, setDoctors] = (0, react_1.useState)([]);
    const [activeTab, setActiveTab] = (0, react_1.useState)("ai");
    const token = localStorage.getItem("token");
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (!token)
            return;
        axios_1.default
            .get("http://localhost:3000/api/v1/user/dashboard", {
            headers: { Authorization: token },
        })
            .then((res) => setDoctors(res.data.doctors))
            .catch(console.log);
        axios_1.default
            .get("http://localhost:3000/api/v1/user/me", {
            headers: { Authorization: token },
        })
            .then((res) => setUsers(res.data))
            .catch(console.log);
    }, []);
    function logout() {
        localStorage.removeItem("token");
        navigate("/home");
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-white p-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center mb-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-3", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl font-semibold text-gray-800", children: ["Welcome, ", users?.firstName] }), (0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { className: "w-5 h-5 text-gray-600 animate-[wave_1.5s_infinite]" })] }), (0, jsx_runtime_1.jsx)("button", { onClick: logout, className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow", children: "Logout" })] }), (0, jsx_runtime_1.jsx)(Tab_1.default, { activeTab: activeTab, setActiveTab: setActiveTab }), activeTab === "ai" && (0, jsx_runtime_1.jsx)(AiSection_1.default, {}), activeTab === "doctors" && (0, jsx_runtime_1.jsx)(DoctorSection_1.default, { doctors: doctors }), activeTab === "profile" && users && ((0, jsx_runtime_1.jsx)(ProfileSection_1.default, { user: users, setUser: setUsers }))] }));
}
//# sourceMappingURL=UserDashboard.js.map