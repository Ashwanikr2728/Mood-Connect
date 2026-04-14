"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tabs;
const jsx_runtime_1 = require("react/jsx-runtime");
function Tabs({ activeTab, setActiveTab }) {
    const tabs = [
        { id: "ai", label: "AI Chat" },
        { id: "doctors", label: "Doctors" },
        { id: "profile", label: "Profile" },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-2 bg-white/70 backdrop-blur-lg border border-gray-200 p-1.5 rounded-xl w-fit shadow-sm mb-6", children: tabs.map((tab) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setActiveTab(tab.id), className: `px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab.id
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-800"}`, children: tab.label }, tab.id))) }));
}
//# sourceMappingURL=Tab.js.map