import Comment from "./Comment";
import {useGetCommentsQuery} from "../store/dummy/dummy.api";
import CommentForm from "./CommentForm";
import {useAppSelector} from "../hooks/redux";
import {useEffect} from "react";
import {useActions} from "../hooks/actions";
import {IComment} from "../models/models";

const Comments = () => {
    const {data, isLoading} = useGetCommentsQuery();
    const comments = useAppSelector((state) => state.dummyApi.comments);
    const {allComments} = useActions();

    useEffect(() => {
        if (data?.comments?.length) {
            allComments(data.comments)
        }
    }, [data?.comments]);

    if (isLoading || !comments?.length) return "Loading...";

    return (
        <div className="mt-12">
            {
                comments.map((comment: IComment) => <Comment key={comment.id} comment={comment}/>)
            }
            <CommentForm total={comments.length}/>
        </div>
    )
}

export default Comments;