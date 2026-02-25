import { Routes, Route } from "react-router-dom";
import Header from "../component/Header";
import Front_Body from "../pages/Front_Body";
import Footer from "../component/Footer";
import Portofolio from "../pages/Portofolio";
import TaskManager from "../pages/taskManager";
import PortoDetails from "../pages/PortoDetails";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Front_Body />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/taskmanager" element={<TaskManager />} />
            <Route path="/projects/:id" element={<PortoDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
