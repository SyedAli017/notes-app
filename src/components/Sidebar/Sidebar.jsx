import React from "react";
import "./Sidebar.module.scss"

const Sidebar = (props) => {
  const noteElements = props.notes.map((map, index) => (
    <div key={noteElements.id}>
        <div className={`title ${note.id == props.currentNote.id ? "selected-note" : ""}`}
        onClick={() => props.setCurrentNoteId(note.id)}
        >
            <h4 className="text-snippet">Note {index + 1}</h4>
        </div>
    </div>
  ));

  return (
    <section className="sidebar">
        <div className="sidebar-header">
        <h3>Notes</h3>
        <button className="new-note" onClick={preprocessCSS.newNote}>+</button>
        </div>
        {noteElements}
    </section>
  )
};

export default Sidebar;
