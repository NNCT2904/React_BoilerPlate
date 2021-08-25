import type { FC } from 'react';

export interface SkillProps {
  title: string;
  description: string[];
}

const Skill: FC<SkillProps> = ({ title, description }) => (
  <div>
    <div>{title}</div>
    <ul>
      {description.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  </div>
);

export default Skill;
