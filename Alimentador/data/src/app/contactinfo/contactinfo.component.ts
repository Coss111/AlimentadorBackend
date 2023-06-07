import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit{

  @Input() id: number;
  @Input() imageSrc: string;
  @Input() nombre: string;
  @Input() phone: string;
  @Input() linkelin: string;

  ngOnInit(){}

  linkeo(url: string): void {
    window.location.href = url; // Redirige al enlace proporcionado
  }

}
