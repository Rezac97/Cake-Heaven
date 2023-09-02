import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cake } from 'src/app/model/cake.model';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css'],
})
export class CakeDetailComponent implements OnInit {
  cakeId: number = 0;
  cake: Cake = new Cake();

  constructor(private service: CakeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cakeId = params['id'];
      this.getOneCake();
    });
  }

  getOneCake() {
    this.service.getOneCake(this.cakeId).subscribe({
      next: (response: Cake) => {
        this.cake = response;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
