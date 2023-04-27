import React from "react";
import type { Project as ProjectType } from "../types";

import { FaReact } from "react-icons/fa";
import Icon from "./Icon";

interface Props {
  project: ProjectType;
  index: number;
}

const Project = ({ project, index }: Props) => {
  const { title, description, techDescription, technologies, link } = project;

  const handleLink = (link: string) => {
    window.location.replace(link);
  };

  const layoutClass =
    (index & -index) === 1
      ? "flex flex-wrap lg:flex-row-reverse mb-12"
      : "flex flex-wrap mb-12";

  return (
    <div className={layoutClass}>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          style={{ backgroundPosition: "50%" }}
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
            className="w-full"
            alt="Louvre"
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </a>
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
          {technologies.map((technology, index) => (
            <div
              key={technology.name + index}
              className="badge flex justify-center px-2 items-center"
            >
              <Icon name={technology.name} />
              <span className="pl-1 text-lg font-semibold">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-white-500 mb-6">{description}</p>
        <p className="text-white-500">{techDescription}</p>
        <div className="flex w-full justify-center py-5">
          <a
            type="button"
            href={link}
            className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
