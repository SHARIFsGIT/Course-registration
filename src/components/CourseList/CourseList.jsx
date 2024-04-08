import PropTypes from "prop-types";
const CourseList = ({course}) => {
    const {course_title} = course;
    return (
        <div>
            <li className="list-decimal text-sm">{course_title}</li>
        </div>
    );
};

CourseList.propTypes = {
    course: PropTypes.object.isRequired,
};

export default CourseList;