# legendary-gitapi
An app that fetches my github repos using a github api intgefrated to the app. when it is clicked u can see my repos and when the repos are clicked u can see further info. It also catches error if there is an issues with network or mistyped address or an error, it will display error message or 404 error. Enjoy my app. Thanks

React GitHub Repository Manager

This is a React-based application that allows users to view repositories from a GitHub account, search through them, and manage repositories (create and delete). The app leverages the GitHub API to display user information and repository data.

## Features

- **GitHub User Information**: Displays the user’s avatar and username fetched from the GitHub API.
- **Repository List**: Lists all repositories from the specified GitHub username and allows for searching.
- **Pagination**: Displays repositories in paginated form for better UX when dealing with a large number of repositories.
- **Create Repository**: Modal dialog to simulate creating a new repository (through a mock modal).
- **Delete Repository**: Provides a button to delete repositories (for mock purposes).

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React Bootstrap**: A React library that provides Bootstrap components.
- **GitHub API**: Fetches repository data and user info.
- **React Router**: For handling navigation in the app.

## Installation

To run this project locally, follow the steps below:

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can download and install them from [Node.js official website](https://nodejs.org/).

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/react-github-repo-manager.git
   cd react-github-repo-manager
   ```

2. **Install dependencies**:

   Inside the project folder, run:

   ```bash
   npm install
   ```

3. **Run the app**:

   Start the development server:

   ```bash
   npm start
   ```

   This will start the application on `http://localhost:3000`.

## Components

### `RepoList`
The `RepoList` component displays the user’s GitHub repositories. It includes the following features:
- Fetches and displays user information (avatar, username).
- Fetches and displays the user’s repositories.
- Allows searching and filtering repositories by name.
- Pagination to navigate between pages of repositories.
- Button to toggle the visibility of repositories.

### `CreateRepoModal`
The `CreateRepoModal` component simulates the creation of a repository by displaying a modal with a button to close it. 

### `RepoDetails`
The `RepoDetails` component is used to display more detailed information about a selected repository. This page is accessible via React Router and shows the repository’s name and additional details fetched from the GitHub API.

## Example UI

The app provides a user interface where:
- A **GitHub avatar** and **username** are shown.
- The user can click to **toggle the repository list**.
- A search bar is available to filter repositories by name.
- Pagination is included to navigate between repository pages.
- Buttons for creating and deleting repositories are available.
- There is a page for NNotfoundpage, if you access the app on localhost and incluse /* u will see the error page.
- There is also an errorboundary in the app



