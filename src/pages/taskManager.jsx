import { useEffect, useState } from "react";
import axios from "axios";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Pending");

  // 🔹 Ambil data dari backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/TaskManager");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // 🔹 Jalan sekali saat halaman dibuka
  useEffect(() => {
  const loadTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/TaskManager");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  loadTasks();
}, []);
  // 🔹 Kirim task baru ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/TaskManager", { task, status });
      setTask("");
      setStatus("Pending");
      fetchTasks(); // refresh table
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <section className="flex justify-center bg-[#0A0A0A] text-white min-h-screen px-6 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* 🧾 LEFT SIDE — TABLE */}
        <div>
          <h2 className="text-xl font-bold mb-4">Task List</h2>
          <table className="w-full table-auto border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="w-2/3 px-4 py-2 text-left">Task</th>
                <th className="w-1/3 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {tasks.map((t) => (
                <tr key={t.id}>
                  <td className="px-4 py-2 truncate max-w-[400px]">
                    {t.task}
                  </td>
                  <td className="px-4 py-2">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 📝 RIGHT SIDE — FORM */}
        <div>
          <h2 className="text-xl font-bold mb-4">Add New Task</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
              required
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-semibold">
              Add Task
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default TaskManager;
