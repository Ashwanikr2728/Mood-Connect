"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeaturesSection;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
// 🔥 Reusable Feature Card
const FeatureCard = ({ title, description, icon, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 \r\n    hover:shadow-xl hover:-translate-y-1 transition duration-300 flex gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-12 h-12 flex items-center justify-center rounded-xl \r\n      bg-linear-to-r from-blue-100 to-purple-100 shrink-0 \r\n      group-hover:scale-110 transition", children: icon }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-sm leading-relaxed", children: description })] })] }));
};
function FeaturesSection() {
    const features = [
        {
            title: "Emotion Continuity",
            description: "Personalized conversations with emotional context.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Heart, { size: 22, strokeWidth: 3, className: "text-pink-500" }),
        },
        {
            title: "Mood Pattern Analysis",
            description: "Auto read mood tracking and trend analysis.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.BarChart, { size: 22, strokeWidth: 3, className: "text-teal-600" }),
        },
        {
            title: "Guided Peer Support",
            description: "Safeguarded peer connection for users.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Users, { size: 22, strokeWidth: 3, className: "text-indigo-600" }),
        },
        {
            title: "Responsible Matching",
            description: "Thoughtful user matching based on stability.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Target, { size: 22, strokeWidth: 3, className: "text-purple-600" }),
        },
        {
            title: "Risk Detection & Redirection",
            description: "Identifies and redirects at-risk users.",
            icon: ((0, jsx_runtime_1.jsx)(lucide_react_1.AlertTriangle, { size: 22, strokeWidth: 3, className: "text-red-500" })),
        },
        {
            title: "Ethical AI Constraints",
            description: "Clear limits on AI to ensure responsible use.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Shield, { size: 22, strokeWidth: 3, className: "text-blue-600" }),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { id: "features", className: "w-full py-24 px-6 md:px-20 relative overflow-hidden", style: {
            backgroundImage: "url('/src/assets/features-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-white/30 via-white/10 to-white/40" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-14", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: "Key Features" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 mt-3 text-sm md:text-base", children: "Designed for safe, intelligent and human-centered support" })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((feature, index) => ((0, jsx_runtime_1.jsx)(FeatureCard, { title: feature.title, description: feature.description, icon: feature.icon }, index))) })] })] }));
}
//# sourceMappingURL=Feature-sec.js.map