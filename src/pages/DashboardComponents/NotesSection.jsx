import React, { useEffect, useState } from "react"
import { FileTextIcon, EditIcon, TrashIcon } from "./Icons"
import authApiClient from "../../services/auth-api-client"

const NotesSection = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [editingNote, setEditingNote] = useState(null)
  const [loading, setLoading] = useState(false)
  const [deletingNoteId, setDeletingNoteId] = useState(null)

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = () => {
    authApiClient.get("/notes/")
      .then(res => {
        const sortedNotes = res.data.results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setNotes(sortedNotes)
      })
      .catch(err => console.error("Failed to fetch notes", err))
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return
    setLoading(true)

    authApiClient.post("/notes/", { content: newNote, priority })
      .then(() => {
        setNewNote("")
        setPriority("Medium")
        fetchNotes()
      })
      .catch(err => console.error("Add note failed", err))
      .finally(() => setLoading(false))
  }

  const handleUpdateNote = (id, content) => {
    authApiClient.put(`/notes/${id}/`, { content })
      .then(() => {
        setEditingNote(null)
        fetchNotes()
      })
      .catch(err => console.error("Update failed", err))
  }

  const handleDeleteNote = (id) => {
    setDeletingNoteId(id)
    authApiClient.delete(`/notes/${id}/`)
      .then(() => fetchNotes())
      .catch(err => console.error("Delete failed", err))
      .finally(() => setDeletingNoteId(null))
  }

  const getPriorityBadge = (level) => {
    const base = "text-xs font-semibold px-2 py-0.5 rounded-full"
    switch (level) {
      case "High":
        return <span className={`${base} bg-red-100 text-red-600`}>High</span>
      case "Medium":
        return <span className={`${base} bg-yellow-100 text-yellow-700`}>Medium</span>
      case "Low":
        return <span className={`${base} bg-green-100 text-green-700`}>Low</span>
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 mr-2">
            <FileTextIcon />
          </span>
          <h3 className="text-lg font-medium">Notes</h3>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* New Note Add Section */}
        <div className="space-y-2">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write a new note..."
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2">
            {["High", "Medium", "Low"].map(level => (
              <button
                key={level}
                onClick={() => setPriority(level)}
                className={`px-3 py-1 rounded-full text-sm font-medium border transition cursor-pointer ${
                  priority === level
                    ? level === "High"
                      ? "bg-red-500 text-white"
                      : level === "Medium"
                      ? "bg-yellow-400 text-white"
                      : "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <button
            onClick={handleAddNote}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center cursor-pointer"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                />
              </svg>
            ) : (
              "Add Note"
            )}
          </button>
        </div>

        {/* Notes List */}
        {notes.map(note => (
          <div key={note.id} className="bg-gray-50 p-4 rounded-md">
            {editingNote === note.id ? (
              <textarea
                value={note.content}
                onChange={e => {
                  const updated = notes.map(n =>
                    n.id === note.id ? { ...n, content: e.target.value } : n
                  )
                  setNotes(updated)
                }}
                className="w-full p-2 border rounded mb-2"
              />
            ) : (
              <p className="text-gray-800">{note.content}</p>
            )}

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-2">
                {/* <span className="text-xs text-gray-500">ID: {note.id}</span> */}
                {getPriorityBadge(note.priority)}
              </div>
              <div className="flex space-x-2">
                {editingNote === note.id ? (
                  <button
                    onClick={() => handleUpdateNote(note.id, note.content)}
                    className="p-1 rounded-md hover:bg-gray-200 text-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setEditingNote(note.id)}
                    className="p-1 rounded-md hover:bg-gray-200 text-gray-500"
                  >
                    <EditIcon />
                  </button>
                )}
                {deletingNoteId === note.id ? (
                  <div className="p-1 text-red-500">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                    </svg>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="p-1 rounded-md hover:bg-gray-200 text-red-500"
                  >
                    <TrashIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesSection
