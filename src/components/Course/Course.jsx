import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {course_image, course_title, short_description, price, credits} = course;
    return (
        <div className="card w-auto mx-auto md:mx-auto bg-[whitesmoke] rounded-lg">
            <figure className="p-3">
                <img width={500} src={course_image} alt="" />
            </figure>
            <div className="card-body p-3 pt-0">
                <h2 className="font-extrabold">{course_title}</h2>
                <p className="text-sm font-light">{short_description}</p>
                <div className="flex justify-between text-sm font-semibold py-1">
                    <div className="flex items-center gap-1">
                        {/* <BiDollar></BiDollar> */}
                        <span>Price: ${price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <BsBook></BsBook> */}
                        <span>Credit: {credits}hr</span>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-sm py-1 bg-blue-600 w-full rounded-md font-semibold text-white hover:bg-blue-700">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
};

export default Course;