export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    { id: 1, title: "React Basics", instructor: "John Doe", description: "Learn React from scratch"},
    { id: 2, title: "Advanced React", instructor: "Jane Smith", description: "Master React concepts"},
    { id: 3, title: "React Hooks", instructor: "Bob Johnson", description: "Learn React Hooks"},
    { id: 4, title: "React Router", instructor: "Alice Williams", description: "Learn React Router"},
    { id: 5, title: "React Context", instructor: "Charlie Brown", description: "Learn React Context"},
    { id: 6, title: "React Redux", instructor: "David Wilson", description: "Learn React Redux"},
    { id: 7, title: "React Testing", instructor: "Eve Davis", description: "Learn React Testing"},
    { id: 8, title: "React Performance", instructor: "Frank Wilson", description: "Learn React Performance"},
    { id: 9, title: "React Security", instructor: "Grace Wilson", description: "Learn React Security"},
    { id: 10, title: "React Patterns", instructor: "Heidi Wilson", description: "Learn React Patterns"},
]

export const getCourseById = (id: number) => courses.find( c => c.id === id);