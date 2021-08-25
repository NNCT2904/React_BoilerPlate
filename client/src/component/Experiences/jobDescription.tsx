import type { FC } from 'react';
import LangIcon from '../Icons/LangIcon';

export interface JobDescriptionProps {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  techIcons: string[];
  technologies: string[];
}

const JobDescription: FC<JobDescriptionProps> = ({
  title,
  companyName,
  description,
  duration,
  techIcons,
  technologies,
}) => (
  <div>
    <h3>{title}</h3>
    <div>{companyName}</div>
    <ul>
      {description.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
    <h4>Tech stack:</h4>
    <ul>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
    <ul>
      {techIcons.map((icon) => (
        <LangIcon name={icon} key={icon} />
      ))}
    </ul>
    <span>{duration}</span>
  </div>
);

export default JobDescription;
