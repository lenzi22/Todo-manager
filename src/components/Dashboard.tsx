
import { useState, type FormEvent } from "react";

type Priority = "low" | "medium" | "high";

type Task = {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
};

type DashboardProps = {
  onLogout: () => void;
};

function Dashboard({ onLogout }: DashboardProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPriority, setEditPriority] = useState<Priority>("medium");

  // Add a new task
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setPriority("medium");
  };

  // Start editing a task
  const handleEdit = (task: Task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditPriority(task.priority);
  };

  // Save edited task
  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    if (!editTitle.trim() || editingId === null) return;

    setTasks(
      tasks.map((task) =>
        task.id === editingId
          ? {
              ...task,
              title: editTitle.trim(),
              description: editDescription.trim(),
              priority: editPriority,
            }
          : task
      )
    );

    setEditingId(null);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
  };

  // Delete a task
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Mark task as completed
  const handleToggle = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">

        {/* Dashboard Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Tasks
          </h1>

          <button
            onClick={onLogout}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Log out
          </button>
        </div>

        {/* Add Task Form */}
        <form
          onSubmit={handleAddTask}
          className="mb-6 rounded-lg bg-white p-6 shadow"
        >
          <h2 className="mb-4 text-xl font-semibold">
            Create a Task
          </h2>

          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 w-full rounded border p-3"
          />

          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-3 w-full rounded border p-3"
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as Priority)
            }
            className="mb-3 w-full rounded border p-3"
          >
            <option value="low">Low priority</option>
            <option value="medium">Medium priority</option>
            <option value="high">High priority</option>
          </select>

          <button
            type="submit"
            className="rounded bg-green-500 px-5 py-2 text-white hover:bg-green-600"
          >
            Add Task
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-4">

          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-lg bg-white p-5 shadow"
            >
              {editingId === task.id ? (

                /* Edit Form */
                <form onSubmit={handleSave}>

                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="mb-3 w-full rounded border p-3"
                  />

                  <textarea
                    value={editDescription}
                    onChange={(e) =>
                      setEditDescription(e.target.value)
                    }
                    className="mb-3 w-full rounded border p-3"
                  />

                  <select
                    value={editPriority}
                    onChange={(e) =>
                      setEditPriority(e.target.value as Priority)
                    }
                    className="mb-3 w-full rounded border p-3"
                  >
                    <option value="low">Low priority</option>
                    <option value="medium">Medium priority</option>
                    <option value="high">High priority</option>
                  </select>

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="rounded bg-green-500 px-4 py-2 text-white"
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      onClick={handleCancel}
                      className="rounded bg-gray-700 px-4 py-2 text-white"
                    >
                      Cancel
                    </button>
                  </div>

                </form>

              ) : (

                /* Display Task */
                <div>
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                      />

                      <h3
                        className={`font-semibold ${
                          task.completed
                            ? "text-gray-400 line-through"
                            : "text-gray-800"
                        }`}
                      >
                        {task.title}
                      </h3>
                    </div>

                    <span
                      className={`rounded px-3 py-1 text-sm ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {task.priority}
                    </span>

                  </div>

                  {task.description && (
                    <p className="mt-2 text-sm text-gray-600">
                      {task.description}
                    </p>
                  )}

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleEdit(task)}
                      className="rounded bg-green-500 px-4 py-2 text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(task.id)}
                      className="rounded bg-red-500 px-4 py-2 text-white"
                    >
                      Delete
                    </button>
                  </div>

                </div>
              )}
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="py-6 text-center text-gray-500">
              No tasks yet. Add your first task!
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
