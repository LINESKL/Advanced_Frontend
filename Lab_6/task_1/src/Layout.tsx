import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '10px', padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <main style={{ padding: '1rem', minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
        <p>Student Portal 2026</p>
      </footer>
    </>
  );    
}

export default Layout;