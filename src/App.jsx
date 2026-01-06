import Header from "./components/Header/Header";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(240, 63, 59, 1)",
            color: "#fff",
            zIndex: 999999999999999,
            borderRadius: "12px",
            padding: "12px 18px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
          },
        }}
      />
    </div>
  );
}

export default App;
