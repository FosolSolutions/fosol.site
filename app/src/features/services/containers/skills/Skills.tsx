import { ISkillModel, skills } from '@/data'
import React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import * as styled from './styled'

export interface ISkillsProps {
  /** Title to display in component. */
  title?: string
  /** Event fires when a click event occurs. */
  onClick?: (skill: ISkillModel) => void
}

export const Skills = ({ title = 'Skills', onClick }: ISkillsProps) => {
  return (
    <styled.Skills>
      <h2>{title}</h2>
      <div>
        <div className="shift">
          <FaCaretLeft />
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <React.Fragment key={skill.id}>
              {index > 0 &&
                !skill.categories.some((c) => skills[index - 1].categories.includes(c)) && (
                  <div className="hr"></div>
                )}
              <div onClick={() => onClick?.(skill)}>
                {skill.icon}
                {skill.showName && <p>{skill.name}</p>}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="shift">
          <FaCaretRight />
        </div>
      </div>
    </styled.Skills>
  )
}
