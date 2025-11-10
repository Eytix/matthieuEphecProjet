export type Formation = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  tags: string[];
  distance: number;
  prix: number;
  horairestart: Date;
  horaireend: Date;
  nombreParticipant: number;
  nombreParticipantMax: number;
}

