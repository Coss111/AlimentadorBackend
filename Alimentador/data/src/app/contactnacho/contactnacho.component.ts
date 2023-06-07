import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactnacho',
  templateUrl: './contactnacho.component.html',
  styleUrls: ['./contactnacho.component.css']
})
export class ContactnachoComponent implements OnInit {

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
