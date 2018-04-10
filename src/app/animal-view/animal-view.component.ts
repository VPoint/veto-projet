import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-animal-view',
  templateUrl: './animal-view.component.html',
  styleUrls: ['./animal-view.component.css']
})
export class AnimalViewComponent implements OnInit {
  animal: any;
  examens: any[] = [];
  examtraitements: any[] = [];
  traitements: any[] = [];
  examHeader: string[];
  medHeader: string[];

  titles = {
    'examenno': 'Exam No.', 'traitementno': 'No.', 'quantite': 'Quantité', 'datecommence': 'Date Début',
    'datefini': 'Date Fini', 'description': 'Description', 'cout': 'Cout'
  };

  constructor(private data: DatabaseService, private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.data.getSome('animal', this.route.snapshot.paramMap.get('id') + '/' + this.route.snapshot.paramMap.get('cliniqueid'))
      .then((data) => {
      this.animal = data.data[0];
      console.log(data);
    });

    this.data.getSome('examen', this.route.snapshot.paramMap.get('id') + '/' + this.route.snapshot.paramMap.get('cliniqueid'))
      .then((data) => {
        this.examens = data.data;
        console.log(data);
      });

    this.data.getSome('traitement/animal', this.route.snapshot.paramMap.get('id')).then(
      (data) => {
        console.log(data);
        this.traitements = data.data;
        if (data.data.length > 0) {
          this.medHeader = Object.keys(this.traitements[0]);
        }
      }
    );
  }

  getTraitment(eId: string) {
    this.data.getSome('traitement', eId)
      .then((data) => {
        this.examtraitements = data.data;
        if(this.examtraitements[0]) {
          this.examHeader = Object.keys(this.examtraitements[0]);
          console.log(data);
        }

      });
  }

  delete(id: string) {
    this.data.delete('animal', id + '/' + this.animal.cliniqueno);
    this.router.navigate(['./animal']);
  }
}
