import React from "react";
import "./Notes.styles.scss";

import { notesData } from "./notesData";

const Notes = () => {
  return (
    <div className="notes-container">
      <strong>Noties</strong>
      <div className="notes">
        {notesData.map((note) => (
          <div key={note.id} className="note">
            <div className="note-icon">{note.icon}</div>
            <div className="note-info">
              <strong>{note.title}</strong>
              <span>{note.subtitle}</span>
              {note.completed ? (
                <span className="completed status">completed</span>
              ) : (
                <span className="pending status">{note.date}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
