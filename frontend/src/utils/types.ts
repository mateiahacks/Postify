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
    name: string,
    email: string,
    token: string,
}

export interface Post {
    id: number,
    author: number,
    title: string,
    content: string,
    likes: number,
    comments: Array<string>,
    hidden: boolean,
    createdAt: string,
}