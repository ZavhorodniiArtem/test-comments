import {IComment} from "../models/models";
import {useActions} from "../hooks/actions";

type PropsType = {
    comment: IComment,
}

const Comment = ({comment}: PropsType) => {
    const nameWords = comment.user.username.split(" ").map(item => item[0]).join("");

    const {removeComment} = useActions();

    return (
        <div className="relative w-[300px] mt-8">
            <div className="bg-[#FEEE7F] text-[#8C8A69] text-xs px-4 pt-2 pb-6">
                <p className="ml-2 pt-3">
                    {comment.body}
                </p>
            </div>
            <span
                className="bg-[#CD9711] rounded-3xl absolute top-[-5px] right-[-5px] w-5 h-5 flex justify-center items-center cursor-pointer"
                onClick={() => removeComment(comment.id)}
            >
                x
            </span>

            <div className="flex items-center absolute top-[-20px] left-[-25px]">
                <p className="flex items-center justify-center bg-[#CD9711] rounded-3xl w-12 h-12 text-white text-xl uppercase">
                    {nameWords}
                </p>
                <p className="bg-[#CD9711] w-[100px] h-6 ml-[-3px] pl-2 flex items-center text-xs font-bold">
                    {comment.user.username}
                </p>
            </div>
        </div>
    )
}

export default Comment;