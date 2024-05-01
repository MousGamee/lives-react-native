export type Video = {
    id: string;
    title: string;
    description: string;
    url: string;
    uploadedBy: string; // ID de l'utilisateur qui a téléchargé la vidéo
    uploadedAt: Date;
    likes: number;
    comments: Comment[];
    // D'autres informations de vidéo peuvent être ajoutées ici
}