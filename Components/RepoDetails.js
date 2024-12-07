import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function RepoDetails() {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/Lotanna1989/${repoName}`)
      .then((res) => res.json())
      .then((result) => {
        setRepoDetails(result);
      });
  }, [repoName]);

  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
      {repoDetails ? (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{repoDetails.name}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {repoDetails.description || "No description available."}
              <br />
              <strong>Stars:</strong> {repoDetails.stargazers_count}
              <br />
              <strong>Forks:</strong> {repoDetails.forks_count}
            </Card.Text>
            <Button variant="primary" href={repoDetails.html_url} target="_blank">
              View on GitHub
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading repository details...</p>
      )}
      <Button variant="secondary" className="mt-3" onClick={() => window.history.back()}>
        Back to Repositories
      </Button>
    </div>
  );
}

export default RepoDetails;
