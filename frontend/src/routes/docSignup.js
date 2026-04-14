"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocSignup;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Input_1 = __importDefault(require("../components/Input"));
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
function DocSignup() {
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [lastName, setLastName] = (0, react_1.useState)("");
    const [age, setAge] = (0, react_1.useState)("");
    const [yearOfExperience, setYearOfExperience] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [gender, setGender] = (0, react_1.useState)("MALE");
    const [specialist, setSpecialization] = (0, react_1.useState)("CARDIOLOGIST");
    const [city, setCity] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const getSecret = () => localStorage.getItem("secret");
    async function handleSignup() {
        try {
            const secret = getSecret();
            await axios_1.default.post("http://localhost:3000/api/v1/doctor/signup", {
                firstName,
                lastName,
                age,
                yearOfExperience,
                email,
                password,
                gender,
                specialist,
                city,
                secret,
            });
            localStorage.removeItem("secret");
            alert("Signup successful doctor");
            navigate("/signin");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (err) {
            alert(err.response?.data?.msg || "Signup failed");
        }
    }
    (0, react_1.useEffect)(() => {
        const secret = getSecret();
        if (!secret) {
            navigate("/doctor-access");
        }
    }, [navigate]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-purple-50 to-white px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-md bg-white p-7 rounded-2xl shadow-lg border border-gray-100 space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold text-gray-800", children: "Doctor Signup" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm mt-2", children: "Join as a healthcare professional" })] }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", placeholder: "First Name", onChange: (e) => setFirstName(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", placeholder: "Last Name", onChange: (e) => setLastName(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "email", placeholder: "Email", onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "password", placeholder: "Password", onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "number", placeholder: "Age", onChange: (e) => setAge(Number(e.target.value)) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", placeholder: "City", onChange: (e) => setCity(e.target.value) }), (0, jsx_runtime_1.jsxs)("select", { className: "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400", onChange: (e) => setSpecialization(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select Specialization" }), (0, jsx_runtime_1.jsx)("option", { value: "CARDIOLOGIST", children: "Cardiologist" }), (0, jsx_runtime_1.jsx)("option", { value: "DERMATOLOGIST", children: "Dermatologist" }), (0, jsx_runtime_1.jsx)("option", { value: "NEUROLOGIST", children: "Neurologist" }), (0, jsx_runtime_1.jsx)("option", { value: "PSYCHIATRIST", children: "Psychiatrist" }), (0, jsx_runtime_1.jsx)("option", { value: "GENERAL_PHYSICIAN", children: "General Physician" }), (0, jsx_runtime_1.jsx)("option", { value: "ORTHOPEDIC", children: "Orthopedic" })] }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "number", placeholder: "Years of Experience", onChange: (e) => setYearOfExperience(Number(e.target.value)) }), (0, jsx_runtime_1.jsxs)("select", { className: "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400", onChange: (e) => setGender(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select Gender" }), (0, jsx_runtime_1.jsx)("option", { value: "MALE", children: "Male" }), (0, jsx_runtime_1.jsx)("option", { value: "FEMALE", children: "Female" }), (0, jsx_runtime_1.jsx)("option", { value: "OTHER", children: "Other" })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleSignup, className: "w-full py-2.5 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow hover:opacity-90", children: "Create Account" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-gray-500 text-center", children: ["Already registered?", " ", (0, jsx_runtime_1.jsx)("span", { onClick: () => {
                                localStorage.removeItem("secret");
                                navigate("/signin");
                            }, className: "text-blue-600 font-medium cursor-pointer hover:underline", children: "Sign in" })] })] }) }));
}
//# sourceMappingURL=docSignup.js.map