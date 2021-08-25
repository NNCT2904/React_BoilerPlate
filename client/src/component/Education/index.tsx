import type { FC } from 'react';
import School from './School';
import type { EducationProps } from './School';

export type EducationSection = EducationProps[];

const educationData = (): { education: EducationSection } => ({
  education: [
    {
      school: 'Deakin University',
      degree: 'Information Technology',
      major: 'Creative Technology',
      duration: 'July 2019 - October 2021',
    },
    {
      school: 'Deakin College',
      degree: 'Information Technology',
      major: 'None',
      duration: 'November 2018 to June 2019',
    },
  ],
});

const Education: FC = () => {
  const { education }: { education: EducationSection } = educationData();

  return (
    <div>
      <div>
        <h2>Education</h2>
        {education.map(({ school, degree, major, duration }) => (
          <School
            school={school}
            degree={degree}
            major={major}
            duration={duration}
            key={school}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
