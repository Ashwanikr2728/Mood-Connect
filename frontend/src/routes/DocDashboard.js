"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DoctorDashboard;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
function DoctorDashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [totalPatients, setTotalPatients] = (0, react_1.useState)(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [users, setUsers] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        try {
            axios_1.default
                .get("http://localhost:3000/api/v1/doctor/dashboard", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
                .then((response) => {
                setTotalPatients(response.data.totalPatients);
                setUsers(response.data.users);
            });
        }
        catch (error) {
            console.error("Error fetching dashboard", error);
        }
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-white flex", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 p-6 flex flex-col justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-semibold text-blue-600 mb-8", children: "Doctor Panel" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("button", { className: "w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium", children: "Dashboard" }), (0, jsx_runtime_1.jsx)("button", { className: "w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition", children: "Appointments" }), (0, jsx_runtime_1.jsx)("button", { className: "w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition", children: "Patients" }), (0, jsx_runtime_1.jsx)("button", { className: "w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition", children: "Profile" })] })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                            localStorage.removeItem("token");
                            navigate("/signin");
                        }, className: "w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm font-medium shadow", children: "Logout" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 p-8 space-y-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-between items-center", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-semibold text-gray-800", children: "Welcome, Doctor \uD83D\uDC4B" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-2xl shadow-md border border-gray-100", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-gray-500 text-sm", children: "Total Patients" }), (0, jsx_runtime_1.jsx)("p", { className: "text-3xl font-bold mt-2 text-gray-800", children: totalPatients })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-2xl shadow-md border border-gray-100", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-gray-500 text-sm", children: "Appointments Today" }), (0, jsx_runtime_1.jsx)("p", { className: "text-3xl font-bold mt-2 text-blue-600", children: "8" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-2xl shadow-md border border-gray-100", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-gray-500 text-sm", children: "Pending Requests" }), (0, jsx_runtime_1.jsx)("p", { className: "text-3xl font-bold mt-2 text-purple-600", children: "3" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-2xl shadow-md border border-gray-100", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Recent Appointments" }), (0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto", children: (0, jsx_runtime_1.jsxs)("table", { className: "w-full text-left text-sm", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { className: "text-gray-500 bg-gray-50", children: [(0, jsx_runtime_1.jsx)("th", { className: "py-3 px-2", children: "Patient" }), (0, jsx_runtime_1.jsx)("th", { className: "py-3 px-2", children: "Age" }), (0, jsx_runtime_1.jsx)("th", { className: "py-3 px-2", children: "Status" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: users.map((user, indx) => ((0, jsx_runtime_1.jsxs)("tr", { className: "border-t hover:bg-gray-50 transition", children: [(0, jsx_runtime_1.jsxs)("td", { className: "py-3 px-2 font-medium text-gray-800", children: [user.firstName, " ", user.lastName] }), (0, jsx_runtime_1.jsx)("td", { className: "py-3 px-2 text-gray-600", children: user.age }), (0, jsx_runtime_1.jsx)("td", { className: "py-3 px-2 text-green-600 font-medium", children: "Active" })] }, indx))) })] }) })] })] })] }));
}
//# sourceMappingURL=DocDashboard.js.map