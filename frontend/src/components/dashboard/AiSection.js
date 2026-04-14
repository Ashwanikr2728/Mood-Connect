"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Chat = () => {
    const [input, setInput] = (0, react_1.useState)("");
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const bottomRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    const sendMessage = async () => {
        if (!input.trim() || loading)
            return;
        const userMessage = { role: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });
            const data = await res.json();
            setMessages((prev) => [
                ...prev,
                {
                    role: "Solace AI",
                    text: data.reply || "I'm here with you. Tell me more.",
                },
            ]);
        }
        catch {
            setMessages((prev) => [
                ...prev,
                { role: "Solace AI", text: "Something went wrong. Try again." },
            ]);
        }
        setLoading(false);
        setInput("");
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-start py-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-4xl h-[80vh] flex flex-col rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white/70 backdrop-blur-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "p-5 backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-sm flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 \r\n    flex items-center justify-center text-white shadow-md", children: "\u2728" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-lg font-semibold text-gray-800 tracking-tight", children: "Solace AI" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500", children: "A safe space to express yourself" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-xs text-green-500", children: "online" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 overflow-y-auto px-4 py-6 space-y-4", children: [messages.map((msg, index) => ((0, jsx_runtime_1.jsx)("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: (0, jsx_runtime_1.jsx)("div", { className: `max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm transition-all ${msg.role === "user"
                                    ? "bg-linear-to-r from-blue-500 to-indigo-500 text-white"
                                    : "bg-white/80 backdrop-blur-md text-gray-800 border border-gray-100"}`, children: msg.text }) }, index))), loading && ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-start", children: (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2 rounded-xl bg-white/80 text-gray-500 text-sm shadow", children: "typing..." }) })), (0, jsx_runtime_1.jsx)("div", { ref: bottomRef })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4 bg-white/80 backdrop-blur-xl border-t border-white/40 flex gap-3", children: [(0, jsx_runtime_1.jsx)("input", { className: "flex-1 px-4 py-2 rounded-xl border border-gray-200 bg-white/90 \r\n          focus:outline-none focus:ring-2 focus:ring-blue-400 transition", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => {
                                if (e.key === "Enter")
                                    sendMessage();
                            }, placeholder: "How are you feeling today?" }), (0, jsx_runtime_1.jsx)("button", { onClick: sendMessage, disabled: loading, className: "px-5 py-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white \r\n          font-medium shadow-md hover:scale-[1.03] transition disabled:opacity-50", children: "Send" })] })] }) }));
};
exports.default = Chat;
//# sourceMappingURL=AiSection.js.map