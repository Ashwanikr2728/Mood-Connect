export default function AiSection() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        🤖 AI Assistant
      </h2>

      <p className="text-gray-500 text-sm mb-4">
        Talk to our AI-powered mental wellness assistant.
      </p>

      <button
        onClick={() => window.open("https://your-ai-link.com", "_blank")}
        className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:opacity-90"
      >
        Try AI Assistant
      </button>
    </div>
  );
}
