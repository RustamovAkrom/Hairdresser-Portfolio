"use client";

export default function ScrollIndicator() {
  const scrollToNext = () => {
    const next = document.getElementById("portfolio");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-800"
    >
      ↓
    </button>
  );
}
