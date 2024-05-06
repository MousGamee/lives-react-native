export type Comment = {
    id: string;
    text: string;
    commentedBy: string; 
    commentedAt: Date;
    likes : number,
    dislikes : number
}