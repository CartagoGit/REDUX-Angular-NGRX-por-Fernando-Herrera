import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ExternalLinks } from '../../interfaces/external-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  // ! Habrá que crear un componente exclusivo para mostrar la información del curso actual
  public links : ExternalLinks;

  constructor(private _storageSvc: StorageService) {
    this.links = this._storageSvc.links;

  }

  ngOnInit(): void {}

  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
