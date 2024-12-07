import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateRepoModal({ show, onHide }) {
  const [repoName, setRepoName] = useState("");

  const handleCreateRepo = () => {
    fetch("https://api.github.com/user/repos", {
      method: "POST",
      headers: {
        Authorization: `token YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: repoName,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Repository created successfully!");
        onHide();
      });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Repository</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Repository Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter repository name"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateRepo}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateRepoModal;
