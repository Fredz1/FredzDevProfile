const projectList = [
  {
    Name: 'My Dev Profile',
    githubLink: 'https://github.com/Fredz1/FredzDevProfile',
    URL: 'https://fredz-dev-profile.vercel.app/',
    description: 'My Developer Profile. Built in next.js',
    image: 'https://github.com/Fredz1/FredzDevProfile/blob/main/public/projectThumbs/myDevProfileImg.png?raw=true',
    tech: ['Next.js'],
    features: ['Next.js 12', 'figma']
    
  },
  {
    Name: 'iStoreSearcher',
    githubLink: 'https://github.com/Fredz1/capStone-Project-2',
    URL: 'https://istoresearcher.herokuapp.com/',
    description: 'Basic Istore searcher for you. You can also favorite ',
    image: 'https://github.com/Fredz1/FredzDevProfile/blob/main/public/projectThumbs/myDevProfileImg.png?raw=true',
    tech: ['React.js']
  },
  {
    Name: 'reactTaskApp',
    githubLink: 'https://github.com/Fredz1/reactTaskApp',
    URL: null,
    description: 'Basic basic basic task app',
    image: 'https://github.com/Fredz1/FredzDevProfile/blob/main/public/projectThumbs/taskappImg.png?raw=true',
    tech: ['Next.js'],
    features: ['Next.js 12', 'figma']
  },
  {
    Name: 'Company Template',
    githubLink: 'https://github.com/Fredz1/CompanyTemplate',
    URL: null,
    description: 'Company template with paralax scrolling and many more areas',
    image: 'https://github.com/Fredz1/FredzDevProfile/blob/main/public/projectThumbs/companyTemplate.png?raw=true'
  },
  {
    Name: 'Minesweeper',
    githubLink: 'https://github.com/Fredz1/CompanyTemplate',
    URL: 'https://aqueous-escarpment-38345.herokuapp.com/',
    description: 'Minesweeper with flexible ',
    image: 'https://github.com/Fredz1/FredzDevProfile/blob/main/public/projectThumbs/mineSweeperImg.png?raw=true'
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

export {randomiser, getAllProjects, getOne}