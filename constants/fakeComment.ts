import { Comment } from "../types";

// Ajoutez autant de textes de commentaires que vous le souhaitez ici
export const fakeComments: Comment[] = [
    {
        id: "1",
        text: "Cet article est vraiment intéressant ! J'ai apprécié la profondeur de l'analyse et la clarté des explications. Cependant, j'aurais aimé voir davantage d'exemples concrets pour illustrer certains points. Dans l'ensemble, c'est un excellent travail !",
        commentedBy: "Alice",
        commentedAt: new Date("2024-05-06T12:00:00Z"),
        likes: 10,
        dislikes: 2
    },
    {
        id: "2",
        text: "Je trouve que le sujet abordé est crucial, mais je pense que l'article manque de rigueur dans sa présentation. Certains arguments semblent faibles et mériteraient d'être renforcés par des données empiriques. Malgré cela, je salue l'effort de l'auteur pour soulever des questions importantes.",
        commentedBy: "Bob",
        commentedAt: new Date("2024-05-05T15:30:00Z"),
        likes: 5,
        dislikes: 0
    },
    {
        id: "3",
        text: "Je suis partagé sur le contenu de cet article. D'un côté, je trouve que l'auteur a bien développé ses idées et fourni des exemples convaincants. D'un autre côté, certains points auraient pu être approfondis davantage pour une compréhension plus complète du sujet.",
        commentedBy: "Charlie",
        commentedAt: new Date("2024-05-04T09:45:00Z"),
        likes: 3,
        dislikes: 1
    },
    {
        id: "4",
        text: "Excellent travail !",
        commentedBy: "David",
        commentedAt: new Date("2024-05-03T18:20:00Z"),
        likes: 8,
        dislikes: 0
    },
    {
        id: "5",
        text: "Je suis partagé sur le contenu de cet article. D'un côté, je trouve que l'auteur a bien développé ses idées et fourni des exemples convaincants. D'un autre côté, certains points auraient pu être approfondis davantage pour une compréhension plus complète du sujet.",

        commentedBy: "Eve",
        commentedAt: new Date("2024-05-02T10:10:00Z"),
        likes: 2,
        dislikes: 4
    }
];