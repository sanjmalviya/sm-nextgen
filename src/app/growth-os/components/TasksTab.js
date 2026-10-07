"use client";

import React, { useState } from "react";
import {
  Sliders,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  Check,
  AlertTriangle,
  Sparkles,
  X
} from "lucide-react";

export default function TasksTab({
  tasks,
  onToggleTask,
  onAddTask
}) {
  const [filter, setFilter] = useState("ALL"); // ALL, PENDING, COMPLETED
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Profile");
  const [newPriority, setNewPriority] = useState("HIGH");

  const filteredTasks = tasks.filter((t) => {
    if (filter === "PENDING" && t.status !== "PENDING") return false;
    if (filter === "COMPLETED" && t.status !== "COMPLETED") return false;
    return true;
  });

  const pendingCount = tasks.filter(t => t.status === "PENDING").length;

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onAddTask({
      id: "task-" + Date.now(),
      title: newTitle,
      category: newCategory,
      priority: newPriority,
      status: "PENDING",
      due: "This Week",
      impact: "+3 Growth Score"
    });
    setNewTitle("");
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Growth Action Center</span>
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Prioritized Growth Tasks
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mt-1">
            Transforms audit insights and optimization opportunities into an executable checklist. Completing tasks raises your Growth Score.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md transition active:scale-95 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Custom Task</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs w-fit">
        <button
          onClick={() => setFilter("ALL")}
          className={"px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer " + (filter === "ALL" ? "bg-[#0097B2] text-white" : "text-slate-400 hover:text-white")}
        >
          All Tasks ({tasks.length})
        </button>
        <button
          onClick={() => setFilter("PENDING")}
          className={"px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer " + (filter === "PENDING" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white")}
        >
          Pending ({pendingCount})
        </button>
        <button
          onClick={() => setFilter("COMPLETED")}
          className={"px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer " + (filter === "COMPLETED" ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white")}
        >
          Completed ({tasks.length - pendingCount})
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="p-12 text-center text-slate-400 bg-slate-900 rounded-3xl border border-slate-800">
            You're all caught up! 🎉
          </div>
        ) : (
          filteredTasks.map((t) => {
            const isDone = t.status === "COMPLETED";
            return (
              <div
                key={t.id}
                className={"p-4 sm:p-5 rounded-2xl border transition flex items-center justify-between gap-4 " + (isDone ? "bg-slate-900/50 border-slate-800/80 opacity-75" : "bg-slate-900 border-slate-800 hover:border-slate-700")}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => onToggleTask(t.id)}
                    className={"w-5 h-5 rounded-lg border mt-0.5 flex items-center justify-center transition cursor-pointer " + (isDone ? "bg-emerald-500 border-emerald-500 text-slate-950" : "border-slate-700 hover:border-[#0097B2]")}
                  >
                    {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={"text-[10px] font-mono font-bold px-2 py-0.5 rounded-full " + (t.priority === "HIGH" ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" : t.priority === "MEDIUM" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-blue-500/20 text-blue-300 border border-blue-500/30")}>
                        {t.priority}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{t.category}</span>
                      <span className="text-[10px] text-emerald-400 font-bold">{t.impact}</span>
                    </div>

                    <h4 className={"font-heading font-extrabold text-sm " + (isDone ? "text-slate-400 line-through" : "text-white")}>
                      {t.title}
                    </h4>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className={"text-xs font-bold px-3 py-1 rounded-xl " + (isDone ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-300")}>
                    {isDone ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Add Custom Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 relative space-y-4 shadow-2xl">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-heading font-extrabold text-lg text-white">
              Create New Growth Task
            </h3>

            <form onSubmit={handleCreate} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 font-bold block mb-1">Task Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Photograph modern 3D panoramic x-ray equipment"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  >
                    <option value="Profile">Profile</option>
                    <option value="Reviews">Reviews</option>
                    <option value="Media">Media</option>
                    <option value="Activity">Activity</option>
                    <option value="Local SEO">Local SEO</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">Priority</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  >
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-extrabold text-xs transition active:scale-95 cursor-pointer mt-2"
              >
                Add Task to Action Center
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
