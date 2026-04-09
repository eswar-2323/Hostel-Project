"use client";

import { useState } from "react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [menu, setMenu] = useState({
    breakfast: "",
    lunch: "",
    snacks: "",
    dinner: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e: any) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  // 🔐 Login
  const handleLogin = () => {
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong password ❌");
    }
  };

  // 🚀 Submit menu
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formattedMenu = {
        breakfast: menu.breakfast
          ? menu.breakfast.split(",").map((i) => i.trim())
          : [],
        lunch: menu.lunch
          ? menu.lunch.split(",").map((i) => i.trim())
          : [],
        snacks: menu.snacks
          ? menu.snacks.split(",").map((i) => i.trim())
          : [],
        dinner: menu.dinner
          ? menu.dinner.split(",").map((i) => i.trim())
          : [],
      };

      console.log("Sending data:", formattedMenu);

      const res = await fetch("http://localhost:8000/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedMenu),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Backend error:", errorText);
        throw new Error("Failed to update menu");
      }

      const data = await res.json();
      console.log("Success response:", data);

      alert("✅ Menu Updated Successfully");

      // Clear fields
      setMenu({
        breakfast: "",
        lunch: "",
        snacks: "",
        dinner: "",
      });

    } catch (error) {
      console.error("Frontend error:", error);
      alert("❌ Error updating menu. Check console (F12)");
    } finally {
      setLoading(false);
    }
  };

  // 🔐 LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">
            Admin Login
          </h2>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ✅ ADMIN PANEL
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Panel
        </h1>

        {["breakfast", "lunch", "snacks", "dinner"].map((meal) => (
          <input
            key={meal}
            name={meal}
            value={(menu as any)[meal]}
            placeholder={`${meal} (comma separated)`}
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
          />
        ))}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Menu"}
        </button>
      </div>
    </div>
  );
}