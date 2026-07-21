import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}