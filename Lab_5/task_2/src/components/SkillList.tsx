import type { Skill, SkillLevel } from '../types.ts';

interface SkillListProps {
    skills: Skill[];
}

const getLevelColor = (level: SkillLevel): string => {
    switch (level) {
        case 'beginner':
            return 'green';
        case 'intermediate':
            return 'orange';
        case 'advanced':
            return 'red';
        default:
            return 'gray';
    }
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} style={{ color: getLevelColor(skill.level), fontWeight: 'bold' }}>
          {skill.name} — <span>{skill.level}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;