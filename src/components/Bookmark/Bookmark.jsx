const Bookmark = () => {
    return (
        <div>
            <div className="h-fit w-80 md:w-96 mx-auto bg-[whitesmoke] rounded-lg px-4">
                <h1 className="py-4 font-bold text-[#2F80ED]">
                    Credit Hour Remaining: {}hr
                </h1>
                <hr />
                <div className="py-4">
                    <h1 className="font-bold text-[18px]">Course Name</h1>
                    <ol className="ps-4 pt-2">

                    </ol>
                </div>
                <hr />
                <h1 className="py-4 text-sm font-semibold">
                    Total Credit Hour: {}hr
                </h1>
                <hr />
                <h1 className="py-4 text-sm font-semibold">
                    Total Price: ${}
                </h1>
            </div>
        </div>
    );
};

export default Bookmark;