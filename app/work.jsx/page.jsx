import React from 'react';

const ProjectList = () => {
  const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    // Add more projects here
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;