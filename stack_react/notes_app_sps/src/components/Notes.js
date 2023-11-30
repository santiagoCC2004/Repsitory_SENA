// src/components/Notes.js
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/servicio/api_notes_app/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error al obtener las notas:', error));
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      {notes.map(note => (
        <Card key={note._id} className="mb-3">
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.content}</Card.Text>
            <Card.Text>Created by: {note.creator}</Card.Text>
            <Card.Text>Created at: {new Date(note.createdAt).toLocaleString()}</Card.Text>
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Notes;
