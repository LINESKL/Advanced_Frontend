import  UserCard from './components/UserCard.tsx';
import SkillList from './components/SkillList.tsx';
import type  { User, Skill } from './types.ts';

function App() {
  const sampleUser: User = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    age: 25
  };

  const sampleSkills: Skill[] = [
    { id: 1, name: "React", level: "Intermediate" },
    { id: 2, name: "TypeScript", level: "Beginner" },
    { id: 3, name: "CSS", level: "Expert" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      
      <UserCard user={sampleUser} isActive={true}>
        <p><strong>Bio:</strong> Опытный разработчик, изучающий TypeScript.</p>
      </UserCard>

      <h3>Skills:</h3>
      <SkillList skills={sampleSkills} />
    </div>
  );
}

export default App;