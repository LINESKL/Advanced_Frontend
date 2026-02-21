import { Link, useSearchParams } from "react-router-dom";
import { courses } from "../data";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const sortOrder = searchParams.get("sort") || "asc";

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div>
      <h1>Courses</h1>
      <button onClick={toggleSort}>
        Sort: {sortOrder.toUpperCase()}
      </button>
      
      <ul style={{ marginTop: '20px' }}>
        {sortedCourses.map((course) => (
          <li key={course.id} style={{ marginBottom: '10px' }}>
            <Link to={`/courses/${course.id}`}>
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;