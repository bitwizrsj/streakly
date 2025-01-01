import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, PlusCircle, ListTodo } from 'lucide-react';
import { useTaskContext } from '../../context/TaskContext';

const TaskSidebar = () => {
  const { tasks } = useTaskContext();
  
  // Group tasks by category
  const tasksByCategory = tasks.reduce((acc, task) => {
    const category = task.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(task);
    return acc;
  }, {} as Record<string, typeof tasks>);

  return (
    <aside className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] fixed top-0 left-0 overflow-y-auto sm:block">
      <nav className="p-4 space-y-6">
        {/* Main navigation */}
        <div className="space-y-2">
          <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <LayoutGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link to="/create" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <PlusCircle className="w-5 h-5" />
            <span>Create Task</span>
          </Link>
          <Link to="/tasks" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <ListTodo className="w-5 h-5" />
            <span>All Tasks</span>
          </Link>
        </div>

        {/* Tasks by category */}
        <div className="space-y-4">
          {Object.entries(tasksByCategory).map(([category, categoryTasks]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                {category}
              </h3>
              <div className="mt-2 space-y-1">
                {categoryTasks.map((task) => (
                  <Link
                    key={task.id}
                    to={`/task/${task.id}`}
                    className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded"
                  >
                    {task.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default TaskSidebar;
