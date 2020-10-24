import React from 'react';
import data from '../Data' ;
import ItemTitle from './ItemTitle';

const { skills  } = data;

const SkillBar = () => (
  <div>
      <ul className="skill-item">
        { skills.map(skill => (   
            <li key={skill.name}>
                <ItemTitle>
                    <span className="skill-icon">
                        <i className={skill.icon} />
                    </span>
                    {skill.name}
                </ItemTitle>
           
            <div className="skill-bar" style={{ width: `${skill.rating}`}}>
                {skill.rating}
                </div>
            </li>
    )) }
     </ul>
  </div>
);
    

export default SkillBar;