export interface RegisterData {
    name: string,
    email: string,
    password: string,
}

export interface LoginData {
    email: string,
    password: string,
}

export interface PostData {
    title: string,
    content: string,
}

export interface User {
    _id: string,
    name: string,
    email: string,
    token: string,
}

export interface Post {
    _id: string,
    author: User,
    title: string,
    content: string,
    likes: Array<string>,
    comments: Array<string>,
    hidden: boolean,
    createdAt: string,
}