import { Component, OnInit } from '@angular/core';
import { CleaningModel, DispensingModel, ScheduleModel } from '../shared/tabla.model';
import { TablaService } from '../shared/tabla.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bdtablas',
  templateUrl: './bdtablas.component.html',
  styleUrls: ['./bdtablas.component.css']
})
export class BDtablasComponent implements OnInit{
  dispensinglog: Observable<DispensingModel[]> | undefined;
  cleaningModel: Observable<CleaningModel[]> | undefined;
  scheduleModel: Observable<ScheduleModel[]> | undefined;

  constructor(private tablaservice: TablaService) { }

  ngOnInit() {
      this.dispensinglog = this.tablaservice.obtenerTablaDispensador();
      this.cleaningModel = this.tablaservice.obtenerTablaAlertas();
      this.scheduleModel = this.tablaservice.obtenerTablaHorario();
  }

}
