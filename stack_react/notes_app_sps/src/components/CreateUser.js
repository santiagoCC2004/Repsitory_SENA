// src/components/CreateUser.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, ListGroup } from 'react-bootstrap';
import axios from 'axios';


const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/servicio/api_notes_app/users')  // Reemplaza esta URL con la correcta
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error al obtener la lista de usuarios:', error));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/servicio/api_notes_app/users', { name: username })  // Reemplaza esta URL con la correcta
      .then(response => {
        console.log('Usuario creado exitosamente:', response.data);
        fetchUsers(); // Actualizar la lista de usuarios después de agregar uno nuevo
        setUsername(''); // Limpiar el campo después de agregar el usuario
      })
      .catch(error => console.error('Error al crear el usuario:', error));
  };

  return (
    <div>
      <h2>Create User</h2>
      <Row className="mb-3">
        <Col xs={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Save
            </Button>
          </Form>
        </Col>
        <Col xs={8}>
          <ListGroup>
            <ListGroup.Item variant="primary">Users:</ListGroup.Item>
            {users.map(user => (
              <ListGroup.Item key={user._id}>{user.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CreateUser;
