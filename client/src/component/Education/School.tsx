import type { FC } from 'react';

export interface EducationProps {
  school: string;
  degree: string;
  major: string;
  duration: string;
}

const Education: FC<EducationProps> = ({ school, degree, major, duration }) => (
  <div>
    <div>
      <h3>{school}</h3>
      <div>{degree}</div>
      <div>{major}</div>
    </div>
    <div>
      <span>{duration}</span>
    </div>
  </div>
);

export default Education;
