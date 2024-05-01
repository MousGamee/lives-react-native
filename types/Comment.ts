export type Comment = {
    id: string;
    text: string;
    commentedBy: string; // ID de l'utilisateur qui a commenté
    commentedAt: Date;
    // D'autres informations de commentaire peuvent être ajoutées ici
}