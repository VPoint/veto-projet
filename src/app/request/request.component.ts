import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database/database.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  displayInfo: any[] = [];
  displayHeader: any[] = [];
  titles = {
    'animalno': 'No. Animal', 'nom': 'Nom', 'atype': 'Type', 'description': 'Description', 'datedenaissance': 'Date de naissance',
    'dateinscription': 'Date d\'inscription', 'etat': 'État',
    'personnelno': 'No. Personnel', 'prenom': 'Prénom', 'nomdefamille': 'Nom de Famille', 'adresse': 'Adresse', 'numtelephone': 'Numéro de téléphone',
    'nas': 'NAS', 'sexe': 'Sexe', 'fonction': 'Fonction', 'salaire': 'Salaire', 'gestionno' : 'No. Gestion',
    'propno': 'No. Prop.', 'avgcout': 'Avg. Cout', 'mincout': 'Min. Cout', 'maxcout': 'Max. Cout', 'nombre_animaux': 'Nombre d\'animaux',
    'salairetotal': 'Salaire Total', 'cout': 'Cout', 'traitementno': 'No. Traitement', 'datee': 'Datée', 'examenno': 'No. Examen', 'heure': 'Heure',
    'cliniqueno': 'No. Clinique', 'cliniquenom': 'Nom', 'codepostal': 'Code postale', 'province': 'Province',
    'rue': 'Rue', 'ville': 'Ville'

  };

  constructor(private data: DatabaseService) { }

  getRequest(requestKey: string) {
    this.data.getAll(requestKey).then(data => {
      this.displayInfo = data.data;
      this.displayHeader = Object.keys(this.displayInfo[0]);
      console.log(data.data);
    });
  }

  ngOnInit(): void {
  }
}
