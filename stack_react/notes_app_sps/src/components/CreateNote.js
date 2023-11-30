// src/components/CreateNote.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const CreateNote = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    creator: '',
    title: '',
    content: '',
    date: new Date(),
  });

  
  useEffect(() => {
    axios.get('http://localhost:5000/servicio/api_notes_app/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error al obtener la lista de usuarios:', error));
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = date => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/servicio/api_notes_app/users', formData)
      .then(response => {
        console.log('Nota creada exitosamente:', response.data);
        // Puedes hacer algo con la respuesta si es necesario
      })
      .catch(error => console.error('Error al crear la nota:', error));
  };

  return (
    <div>
      <h2>Create Note</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formCreator">
            <Form.Label>Creator:</Form.Label>
            <Form.Select name="creator" value={formData.creator} onChange={handleChange} required>
              <option value="" disabled>Select creator</option>
              {users.map(user => (
                <option key={user._id} value={user.name}>{user.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formContent">
            <Form.Label>Content:</Form.Label>
            <Form.Control as="textarea" name="content" value={formData.content} onChange={handleChange} required />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDate">
            <Form.Label>Date:</Form.Label>
            <DatePicker selected={formData.date} onChange={handleDateChange} className="form-control" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default CreateNote;
