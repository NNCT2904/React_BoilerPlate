import type { FC } from 'react';

const About: FC = () => {
  /*
    firstname
    lastname
    address
    email
    */
  const firstname = 'Thanh';
  const lastname = 'Nguyen';
  const address = 'Melbourne, Victoria, Austraila';
  const email = 'nnct2000@gmail.com';

  return (
    <div>
      <div>
        <h1>
          {firstname}
          <span>{lastname}</span>
        </h1>
      </div>
      <div>
        {`${address} - `}
        <a href={`mailto:${email}`}>{`${email}`}</a>
      </div>
      <p>
        Final year Bachelor of IT in Deakin University with excellentwork ethics
        and ability to study and adapt to various environment. Demonstrated IT
        industrial skills during Internship with Ford Motor Au and Leadership
        during teamwork assignment.
      </p>
    </div>
  );
};

export default About;
