const projectList = [
  {
    Name: 'My Dev Profile',
    githubLink: 'https://github.com/Fredz1/FredzDevProfile',
    URL: 'https://fredz-dev-profile.vercel.app/',
    description: 'My Developer Profile. Built in next.js',
    image: 'https://github.com/Fredz1/FredzDevProfile/blob/main/public/projectThumbs/myDevProfileImg.png'
  },
  {
    Name: 'iStoreSearcher',
    githubLink: 'https://github.com/Fredz1/capStone-Project-2',
    URL: 'https://istoresearcher.herokuapp.com/',
    description: 'Basic Istore searcher for you. You can also favorite '
  }
]

const randomiser = num => {
  // edge case elimination
  if (num >= projectList.length) return projectList

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

export {randomiser, getAllProjects}