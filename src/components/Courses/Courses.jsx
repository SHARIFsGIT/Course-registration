import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectCourses}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="md:w-3/4 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                courses.map(course =>
                <Course 
                handleSelectCourses = {handleSelectCourses}
                key={course.id} 
                course = {course}>
                </Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelectCourses: PropTypes.func.isRequired,
};

export default Courses;