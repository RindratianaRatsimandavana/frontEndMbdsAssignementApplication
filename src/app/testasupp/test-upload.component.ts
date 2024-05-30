import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContenuService } from '../services/contenu.service';
import { Contenu } from '../modele/contenu';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css']
})
export class TestUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private contenuService: ContenuService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      const contenu: Contenu = {
        id_assignment: 2,
        id_eleve: 2,
        commentaire: 'Avec export essaie angular',
        note: 10,
        reponse: 'bonus ',
        dateRendu: new Date('2024-05-27T14:48:00.000Z')
      };

      let formData: FormData = new FormData();
      formData.append('file', this.selectedFile);

      if (contenu.id_assignment !== undefined) {
        console.log('misyyy')
        formData.append('id_assignment', `${contenu.id_assignment}`);

      }
      if (contenu.id_eleve !== undefined) {
        formData.append('id_eleve', `${contenu.id_eleve}`);
      }
      if (contenu.commentaire !== undefined) {
        formData.append('commentaire', `${contenu.commentaire}`);
      }
      if (contenu.note !== undefined) {
        formData.append('note', `${contenu.note}`);

      }
      if (contenu.reponse !== undefined) {
        formData.append('reponse', `${contenu.reponse}`);
      }
      if (contenu.dateRendu !== undefined) {
        formData.append('dateRendu', `${contenu.dateRendu}`);
      }
      console.log("+++++++++++++++++++++   ici c'est formdata du TS ",formData)
      this.contenuService.addContenu(formData).subscribe(
        (reponse) => {
          console.log(reponse);
          // Navigate to display the list of assignments programmatically using the router
        },
        (error) => {
          console.error('Upload error:', error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }
}
