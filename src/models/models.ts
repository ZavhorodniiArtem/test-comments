export interface IComment {
    id: number,
    body: string,
    postId: number,
    user: {
        id: number,
        username: string
    }
}

export interface IDummy {
    comments: IComment[],
    limit: number,
    skip: number,
    total: number
}