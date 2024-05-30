export class Assignement {
 _id?: string;
  titre!: string;
  dateDeRendu!: Date;
  id_matiere!: Number;
  id_type_a_rendre!: string;
  Description!: string;
  upload_fichier!: string; // tsy tadidiko hoe inona moa ny atao eto le fichier ve
  email_reminder!: boolean;
  id_promotion!: Number;
}
