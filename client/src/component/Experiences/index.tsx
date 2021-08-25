import type { FC } from 'react';
import type { JobDescriptionProps } from './jobDescription';
import JobDescription from './jobDescription';

export type ExperienceSection = JobDescriptionProps[];

const personalData = () => ({
  experience: [
    {
      title: 'Software Developer Intern',
      companyName: 'Ford Motor Australia',
      description: [
        'Develop newcomponents for Ford’s data collecting form and URL shortener, using MongoDB, Express.js,AngularJS and Node.js',
        'Planned and implemented design patternand concepts',
        'Applied Agile process for team project management of 5 people',
      ],
      duration: 'November 2020 to February 2021',
      techIcons: [
        'github',
        'angular',
        'node',
        'npm',
        'js',
        'bootstrap',
        'sass',
      ],
      technologies: [
        'Front-end: AngularJs, TypeScript',
        'Back-end: ExpressJs, NodeJs, MongoDb',
      ],
    },
    {
      title: 'Sample job title',
      companyName: 'Sample Company Name',
      description: ['Desc1', 'Desc2'],
      duration: 'Sample duration',
      techIcons: ['node', 'js'],
      technologies: ['node', 'js'],
    },
  ],
});

const Experiences: FC = () => {
  const { experience }: { experience: ExperienceSection } = personalData();

  return (
    <div>
      <div>
        <h2>Experience</h2>
        {experience.map(
          ({
            title,
            companyName,
            description,
            duration,
            techIcons,
            technologies,
          }) => (
            <JobDescription
              key={companyName}
              title={title}
              companyName={companyName}
              description={description}
              duration={duration}
              techIcons={techIcons}
              technologies={technologies}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Experiences;
