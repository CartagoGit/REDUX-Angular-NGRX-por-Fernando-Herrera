import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public email: string = 'cv2mario@gmail.com';

  constructor(private _storageSvc: StorageService) {
    this.email = this._storageSvc.email;
  }

  ngOnInit(): void {}

  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
