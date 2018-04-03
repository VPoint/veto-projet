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
  traitements: any[] = [];

  constructor(private data: DatabaseService, private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.data.getSome('animal', this.route.snapshot.paramMap.get('id'))
      .then((data) => {
      this.animal = data.data[0];
      console.log(data);
    });

    this.data.getSome('examen', this.route.snapshot.paramMap.get('id'))
      .then((data) => {
        this.examens = data.data;
        console.log(data);
      });
  }

  getTraitment(eId: string) {
    this.data.getSome('traitement', eId)
      .then((data) => {
        this.traitements = data.data;
        console.log(data);
      });
  }

  delete(id: string) {
    this.data.delete('animal', id);
    this.router.navigate(['./animal']);
  }
}
