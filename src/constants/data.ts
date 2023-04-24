import type React from "react";

type Tech = string;

type Project = {
  name: string;
  url: string;
  placeholder: string | undefined;
  className: string;
  tech: Tech;
  description?: React.ReactNode;
};

export const projectList: Array<Project> = [
  {
    name: "Happy Wastes",
    url: "https://p3-2109-happywastes-front.toulouse-1.wilders.dev/",
    placeholder: undefined,
    className: "happy-wastes",
    tech: "React - Javascript - Node - SQL",
    description: `      <ul>
        <li>Team Project web-app on the subject of recycling.</li>
        <li>
          A user is able to create an account, modify its aspects with a
          customizable avatar.
        </li>
        <li>
          The user can find recycling centers in proximity on a leaflet map, add
          them to a favourite list, validate recycling and attribute rewards to
          the user.
        </li>
      </ul>`,
  },
  {
    name: "Missive Immersive",
    url: "https://lea-stauder.art/",
    placeholder: undefined,
    className: "missive-immersive",
    tech: "PHP - Wordpress",
    description: `      <ul>
        <li>Art Protfolio.</li>
        <li>
          Users are able to navigate to various pages showing content and image
          carousels.
        </li>
        <li>Users are able to send contact mails from the contact page.</li>
      </ul>`,
  },
  {
    name: "EmerGa Urgence (À venir) ",
    url: "",
    placeholder: undefined,
    className: "emerga",
    tech: "React - Javascript - Node - SQL ",
    description: `      <ul>
        <li>Emergency response web-app</li>
        <li>
          Questions are asked to determine the source and severity of the
          incident
        </li>
        <li>
          A call suggestion will be made based on answers provided by the user.
        </li>
        <li>
          Immediate rescue gestures are shown to the users via illustrations
        </li>
        <li>
          All data will be transferred to the concerned emergency service for a
          faster response
        </li>
      </ul>`,
  },
  {
    name: `Chou'pets`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:6931197252598157312/",
    placeholder: undefined,
    className: "choupets",
    tech: "React - Javascript - Python - Node - SQL ",
    description: `      <ul>
        <li>Animal food an health tracker</li>
        <li>
          A connected device measures in intervals the distance between the top
          and bottom of the bowl.
        </li>
        <li>
          Distance is translated to percentages, which are in turn displayed as
          a graph on the home screen.
        </li>
        <li>
          Future versions will have an option to register multiple animals
        </li>
      </ul>`,
  },
  {
    name: "This Portfolio",
    url: "https://www.joerikaiser.dev/",
    placeholder: undefined,
    className: "portfolio",
    tech: "React - Javascript ",
  },
];
