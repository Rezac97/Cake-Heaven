import { Component } from '@angular/core';
import { Cake } from '../model/cake.model';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent {
  cakes: Cake[] = [];
  ingredients: string[] = [];

  params = {
    sort: 'name',
    sortDirection: 'asc',

    filter: {
      ingredients: '',
    },
  };

  constructor(private service: CakeService) {}

  ngOnInit() {
    this.getCakes();
    this.getIngredients();
  }

  getCakes(): void {
    this.service.getAllCakes(this.params).subscribe({
      next: (cakes: Cake[]) => {
        this.cakes = cakes;
        console.log(this.cakes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getIngredients(): void {
    this.service.getIngredients().subscribe({
      next: (ingredients: string[]) => {
        this.ingredients = ingredients;
        console.log(ingredients);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClick(data: any): void {
    this.params.filter.ingredients = data.target.value;
    this.getCakes();
    console.log(data.target.value);
  }
}
