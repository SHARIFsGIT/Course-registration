import { useState } from 'react';
import './App.css';
import Bookmark from './components/Bookmark/Bookmark';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

function App() {
  const [courses, setCourses] = useState([])

  const handleSelectCourses = course => {
    const newCourse = [...courses, course];
    setCourses(newCourse);
  };

  return (
    <>
    <Header></Header>
    <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4 pb-6">
      <Courses handleSelectCourses={handleSelectCourses}></Courses>
      <Bookmark></Bookmark>
    </div>
    </>
  )
}

export default App
