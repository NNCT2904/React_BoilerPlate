import type { FC } from 'react';
import Skill from './Skill';
import type { SkillProps } from './Skill';
import LangIcon from '../Icons/LangIcon';

export type TechStackSection = string[];
export type SkillsSections = SkillProps[];

interface SkillsProp {
  skills: SkillsSections;
  techStack: TechStackSection;
}
const skillData = (): SkillsProp => ({
  skills: [
    {
      title: 'Back-end',
      description: ['back-end job'],
    },
    {
      title: 'Front-end',
      description: ['Front-end job'],
    },
  ],
  techStack: [
    'js',
    'node',
    'react',
    'npm',
    'yarn',
    'html5',
    'css3',
    'sass',
    'docker',
    'microsoft',
    'github',
    'bitbucket',
    'trello',
  ],
});

const SkillSection: FC = () => {
  const { skills, techStack }: SkillsProp = skillData();

  return (
    <div>
      <h2>Skills</h2>
      {skills.map(({ title, description }) => (
        <Skill title={title} description={description} key={title} />
      ))}
      <ul>
        {techStack.map((lang) => (
          <LangIcon name={lang} key={lang} />
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
