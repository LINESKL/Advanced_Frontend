import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "../data";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { course } = useLoaderData() as { course: Course };

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <hr />
      <p style={{ color: 'gray' }}>Route ID parameter: {id}</p>
    </div>
  );
};

export default CourseDetail;