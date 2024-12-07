import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import CreateRepoModal from "./CreateRepoModal";

function RepoList() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showRepos, setShowRepos] = useState(false);
  const [showModal, setShowModal] = useState(false); // For showing the CreateRepoModal
  const reposPerPage = 5;

  useEffect(() => {
    fetch("https://api.github.com/users/Lotanna1989")
      .then((res) => res.json())
      .then((result) => {
        setAvatarURL(result.avatar_url);
        setGitHubUsername(result.login);
      });

    fetch("https://api.github.com/users/Lotanna1989/repos")
      .then((res) => res.json())
      .then((result) => {
        setRepoData(result);
        setFilteredData(result);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    setFilteredData(repoData.filter((repo) => repo.name.toLowerCase().includes(query)));
  };

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredData.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredData.length / reposPerPage);

  const handleShowRepos = () => {
    setShowRepos(!showRepos);
  };

  // Handle delete repository
  const handleDeleteRepo = (repoName) => {
    const updatedRepoData = repoData.filter((repo) => repo.name !== repoName);
    setRepoData(updatedRepoData);
    setFilteredData(updatedRepoData); // Ensure the filtered data also updates
  };

  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatarURL} />
        <Card.Body>
          <Card.Title>{githubUsername}</Card.Title>
          <Button onClick={handleShowRepos} variant="primary">
            {showRepos ? "Hide Repositories" : "Show Repositories"}
          </Button>
          <Button
            variant="success"
            className="mt-2"
            onClick={() => setShowModal(true)}
          >
            Create Repository
          </Button>
        </Card.Body>
      </Card>

      {showRepos && (
        <>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Search repositories"
              value={search}
              onChange={handleSearch}
              className="form-control mb-3"
              style={{ width: "300px" }}
            />
            <div>
              {currentRepos.map((repo) => (
                <div key={repo.id} className="mb-2 d-flex justify-content-between">
                  <Link to={`/repo/${repo.name}`} className="text-decoration-none">{repo.name}</Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteRepo(repo.name)}
                    className="ms-2"
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
            <Pagination className="mt-3">
              {[...Array(totalPages).keys()].map((page) => (
                <Pagination.Item
                  key={page + 1}
                  active={page + 1 === currentPage}
                  onClick={() => paginate(page + 1)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </>
      )}

      <CreateRepoModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default RepoList;
