export interface Technology {
  name: string
  icon: string
}

export interface Project {
  title: string
  description: string
  techDescription: string
  technologies: Technology[]
  link: string
}
