import React, {useEffect, useState} from "react";
import {useActions} from "../hooks/actions";
import {IComment} from "../models/models";

type PropsType = {
    total: number
};

const CommentForm = ({total}: PropsType) => {
    const [text, setText] = useState("");

    const {addComment} = useActions()

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setText(e.target.value)
        localStorage.setItem("text", e.target.value);
    }

    const handleSubmit: React.MouseEventHandler<HTMLSpanElement> = () => {
        if (!text) return;
        const newComment: IComment = {
            id: total + 1,
            body: text,
            postId: total + 1,
            user: {
                id: total + 1,
                username: "New user"
            }
        }
        localStorage.setItem("text", "");
        setText("")
        addComment(newComment);
    }

    useEffect(() => {
        const text = localStorage.getItem("text") || "";
        setText(text);
    }, []);

    return (
        <div className="mt-6 relative">
            <textarea
                name="comment"
                cols={38}
                rows={5}
                value={text}
                onChange={handleChange}
                className="outline-0 border-2 border-yellow-950"/>

            <span
                className="text-white bg-[#5A2424] px-3 py-1 cursor-pointer absolute bottom-0 right-[-20px] cursor-pointer"
                onClick={handleSubmit}
            >
                Send
            </span>
        </div>
    )
}

export default CommentForm;