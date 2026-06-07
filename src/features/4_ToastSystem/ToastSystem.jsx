import { useState } from "react";
import "./style4.scss";
import Toast from "./Toast";

export default function ToastSystem() {
  const messages = [
    {
      type: "info",
      message: "New update available",
      color: "blue",
    },
    {
      type: "success",
      message: "Action completed successfully",
      color: "green",
    },
    {
      type: "warning",
      message: "Be careful with this action",
      color: "orange",
    },
    {
      type: "error",
      message: "Something went wrong",
      color: "red",
    },
  ];

  // 🔥 ONE SINGLE STATE (best practice)
  const [toasts, setToasts] = useState([]);

  const handleClick = (toast) => {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      { ...toast, id }
    ]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const deleteToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="toast-msgs-container">

      <div className="toasts">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            deleteToast={() => deleteToast(toast.id)}
          />
        ))}
      </div>

      <h1>Toast System</h1>

      <div className="toasts-btns">
        {messages.map((msg) => (
          <button
            key={msg.type}
            style={{ backgroundColor: msg.color }}
            onClick={() => handleClick(msg)}
          >
            {msg.type}
          </button>
        ))}
      </div>
    </div>
  );
}