export type Notification = {
    id: string;
    type: 'like' | 'comment' | 'follow';
    targetId: string; // ID de la vidéo ou de l'utilisateur concerné
    userId: string; // ID de l'utilisateur qui a déclenché la notification
    createdAt: Date;
    // D'autres informations de notification peuvent être ajoutées ici
}
