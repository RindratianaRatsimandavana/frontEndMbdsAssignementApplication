export class Assignement {
 _id?: string;
  titre!: string;
  dateRendu!: Date;
  id_matiere!: string;
  id_type_a_rendre!: string;
  Description!: string;
  upload_fichier!: string; // tsy tadidiko hoe inona moa ny atao eto le fichier ve
  email_reminder!: boolean;
  id_promotion!: string;
}
