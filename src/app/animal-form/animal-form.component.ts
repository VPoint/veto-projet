import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  animal: any = {};
  cliniqueInfo = [];
  selectedClinique: any;
  action = 'Créer animal';

  propInfo = [];
  selectedProp: any;
  isEditMode = false;

  constructor(private data: DatabaseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.data.getAll('clinique').then(
      (res) => {
        this.cliniqueInfo = res.data;
        this.selectedClinique = this.cliniqueInfo[0].cliniqueno;
      }
    );

    console.log(this.route.url.pipe());
    this.data.getSome('animal', this.route.snapshot.paramMap.get('id'))
      .then((data) => {
        if (data.data[0]) {
          this.animal = data.data[0];
          this.isEditMode = true;
          this.action = 'Modifier animal';
          this.selectedClinique = this.animal.cliniqueno;
          this.getOwner();
          console.log(data);
        }
      });
  }

  getOwner() {
    this.data.getSome('proprietaire', this.selectedClinique).then(
      (res) => {
        this.propInfo = res.data;
        this.selectedProp = this.propInfo[0].propno;
      }
    );
  }

  editAnimal() {
    if (this.isEditMode) {
      this.data.update('animal', this.route.snapshot.paramMap.get('id'), this.animal)
        .then((data) => {
          if (data.result === 'SUCCESS') {
            this.router.navigate(['./animal/' + this.animal.animalno]);
          }
          console.log(data);
        });
    } else {
      this.animal.animalno = 'A' + Math.floor(Math.random() * Math.floor(10) + 11);
      this.data.create('animal', this.animal)
        .then((data) => {
          if (data.result === 'SUCCESS') {
            this.router.navigate(['./animal/' + this.animal.animalno]);
          }
          console.log(data);
        });
    }
  }
}
