import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <section id="education-section" className="my-5 ">
      <br /><br /><FontAwesomeIcon icon={faGraduationCap} className='text-success fs-1 p-2' /><br/>
      <h2 className="fw-bolder">Educational Background</h2><br />
      <div>
        <h4 className='text-secondary p-1 m-0'>Vellore Institute of Technology, Chennai</h4>
        <p className="text-secondary p-1 m-0">B.Tech. Computer Science and Engineering with specialization in AI & ML</p>
        <p className="text-secondary p-1 m-0">Graduating in 2025</p>
      </div>
    </section>
  );
}

export default Education;