import type { Project } from "types";


const projectsData: Project[] = [
  {
    title: 'Art.penter',
    description: 'Artist Portfolio website displaying artistic creations and ideas',
    techDescription: 'This website was made with Astro Build',
    technologies: [
      {
        name: 'Astro',
        icon: 'astro',
      },
      {
        name: 'React',
        icon: 'react',
      },
      {
        name: 'Typescript',
        icon: 'typescript',
      },
      {
        name: 'Strapi',
        icon: 'strapi',
      }
    ],
    link: 'https://lea-stauder.art'
  },
  {
    title: 'Codeless',
    description: 'Collaborative Web based code editor',
    techDescription: 'This is a school project between 4 people',
    technologies: [
      {
        name: 'React',
        icon: 'react',
      },
      {
        name: 'Postgres',
        icon: 'postgres',
      },
      {
        name: 'Typescript',
        icon: 'typescript',
      },
      {
        name: 'Apollo',
        icon: 'apollo',
      }
    ],
    link: 'https://rivest4.wns.wilders.dev/'
  },
]

const constants = { projectsData }

export default constants;