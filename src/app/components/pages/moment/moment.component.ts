import { Component, OnInit } from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit{
 moment?:Moment;
 baseApiUrl = environment.baseApiUrl;

faTimes =faTimes;
faEdit =faEdit;

 constructor (
  private momentService:MomentService,
  private route :ActivatedRoute
  ){}
  ngOnInit(): void {
      //id que está na url
      const id =Number(this.route.snapshot.paramMap.get('id'));
      this.momentService
      .getMoment(id)
      .subscribe((item) =>(this.moment = item.data));
  }

}
