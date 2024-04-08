import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";

const Bookmark = ({selectCourses, hour, remainingHour, price}) => {
    return (
        <div>
            <div className="h-fit w-auto md:w-96 mx-auto bg-[whitesmoke] rounded-lg px-4">
                <h1 className="py-4 font-bold text-[#2F80ED]">
                    Credit Hour Remaining: {`${remainingHour > 0 ? remainingHour : 0}`}hr
                </h1>
                <hr />
                <div className="py-4">
                    <h1 className="font-bold text-[18px]">Course Name</h1>
                    <ol className="ps-4 pt-2">
                        {
                            selectCourses.map((course) => (
                                <CourseList 
                                key={course.id} 
                                course={course}>
                                </CourseList>

                            ))
                        }
                    </ol>
                </div>
                <hr />
                <h1 className="py-4 text-sm font-semibold">
                    Total Credit Hour: {hour}hr
                </h1>
                <hr />
                <h1 className="py-4 text-sm font-semibold">
                    Total Price: ${price}
                </h1>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    hour: PropTypes.number,
    remainingHour: PropTypes.number,
    price: PropTypes.number,
    selectCourses: PropTypes.array
};

export default Bookmark;