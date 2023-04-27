import React from "react";
import {
  SiTypescript,
  SiAstro,
  SiStrapi,
  SiReact,
  SiPostgresql,
  SiApollographql,
} from "react-icons/si";

interface Props {
  name: string;
}

const Icon = ({ name }: Props) => {
  console.log(name);
  const size = "1.3em";
  if (name === "React") {
    return <SiReact size={size} />;
  }
  if (name === "Typescript") {
    return <SiTypescript size={size} />;
  }
  if (name === "Astro") {
    return <SiAstro size={size} />;
  }
  if (name === "Strapi") {
    return <SiStrapi size={size} />;
  }
  if (name === "Postgres") {
    return <SiPostgresql size={size} />;
  }
  if (name === "Apollo") {
    return <SiApollographql size={size} />;
  }
  return <div />;
};

export default Icon;
