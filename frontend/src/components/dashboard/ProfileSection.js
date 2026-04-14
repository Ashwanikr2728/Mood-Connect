"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileSection;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
function ProfileSection({ user, setUser }) {
    if (!user) {
        return null;
    }
    const handleUpdate = async () => {
        const res = await axios_1.default.patch("http://localhost:3000/api/v1/user/update", user, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        alert("Updated successfully");
        console.log("updated user", res.data);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-start py-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-3xl h-[75vh] flex flex-col rounded-3xl overflow-hidden border border-white/30 shadow-xl bg-white/70 backdrop-blur-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "p-6 border-b border-gray-100 flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-md", children: "\uD83D\uDC64" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold text-gray-800", children: "Your Profile" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500", children: "Keep your details up to date" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 overflow-y-auto p-6 space-y-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsx)("input", { className: "p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition", value: user.firstName, onChange: (e) => setUser((prev) => prev ? { ...prev, firstName: e.target.value } : prev), placeholder: "First Name" }), (0, jsx_runtime_1.jsx)("input", { className: "p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition", value: user.lastName, onChange: (e) => setUser((prev) => prev ? { ...prev, lastName: e.target.value } : prev), placeholder: "Last Name" }), (0, jsx_runtime_1.jsx)("input", { className: "p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition col-span-2", value: user.city, onChange: (e) => setUser((prev) => prev ? { ...prev, city: e.target.value } : prev), placeholder: "City" }), (0, jsx_runtime_1.jsx)("input", { type: "number", className: "p-3 rounded-xl border border-gray-200 text-sm bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none transition col-span-2", value: user.age, onChange: (e) => setUser((prev) => prev ? { ...prev, age: Number(e.target.value) } : prev), placeholder: "Age" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-5 border-t border-gray-100 flex justify-end", children: (0, jsx_runtime_1.jsx)("button", { onClick: handleUpdate, className: "px-6 py-2.5 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md hover:scale-[1.03] transition", children: "Save Changes" }) })] }) }));
}
//# sourceMappingURL=ProfileSection.js.map