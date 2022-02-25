const projectList = [
  {
    Name: 'My Dev Profile',
    githubLink: 'https://github.com/Fredz1/FredzDevProfile',
    URL: 'https://fredz-dev-profile.vercel.app/',
    description: [
      'My Developer Profile. Built in next.js.',
      'Using latest nextJS 12 and react 17.', 
      'Future plans are to build out the blog and do blogging stuff on the blog. Next would be to host my profile on a VPS.  Also need to do some more SEO. The mobile styling is sortof done-ish and and and and and.....', 
      'Check back for more. Oh and one last thing.  My modeling pics need to be added to the site aswell.', 
      'This seems to be a todo list. So ill just say that Ill do a little chat thing aswell'
    ],
    tech: ['nextJS'],
    
  },
  {
    Name: 'iStoreSearcher',
    githubLink: 'https://github.com/Fredz1/capStone-Project-2',
    URL: 'https://istoresearcher.herokuapp.com/',
    description: [
      'Basic Istore searcher for you. You can also favorite.'
    ],
    tech: ['axios', 'reactJS']
  },
  {
    Name: 'reactTaskApp',
    githubLink: 'https://github.com/Fredz1/reactTaskApp',
    URL: null,
    description: [
      'Basic basic basic task app'
    ],
    tech: ['reactJS', 'mongoDB', 'expressJS', 'jwt', 'axios']
  },
  {
    Name: 'Company Template',
    githubLink: 'https://github.com/Fredz1/CompanyTemplate',
    URL: null,
    description: [
      'Company template with paralax scrolling and many more areas'
    ],
    tech: ['html5', 'css3']
  },
  {
    Name: 'Minesweeper',
    githubLink: 'https://github.com/Fredz1/CompanyTemplate',
    URL: 'https://aqueous-escarpment-38345.herokuapp.com/',
    description: [
      'Minesweeper with flexible '
    ],
    tech: ['reactJS', 'css3']
  },
  {
    Name: 'World Stats',
    githubLink: 'https://github.com/Fredz1/worldStatsNextJS',
    URL: 'https://world-stats-next-js-v2.vercel.app/',
    description: [
      'Interesting facts and stats from any country in the world.  This is still a working in progress probably for the foreable future.'
    ],
    tech: ['nextJS']
  }
]

const randomiser = num => {
  // edge case elimination
  if (num >= projectList.length || num === 'all') return projectList
  

  const list = []

  if(num >= projectList.length) return projectList

  for(let i = 0; i < num; i++){
    const num = Math.ceil(Math.random() * (projectList.length - 1))
    list.push(projectList[num])
  }

  return list
}

const getAllProjects = () => {
  return projectList
}

const getOne = projectName => {
  const projectData = projectList.find(
    el => el.Name === projectName
  )
  return projectData
}

export {randomiser, getAllProjects, getOne, projectList}