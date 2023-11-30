// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">NotesApp</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Notes</Nav.Link>
              <Nav.Link as={Link} to="/create-note">Create Note</Nav.Link>
              <Nav.Link as={Link} to="/create-user">Create User</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create-note" element={<CreateNote />} />
            <Route path="/create-user" element={<CreateUser />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
