import { Component } from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  availableLangs: string[];
  selectedLang: string;

  constructor(private translocoService: TranslocoService) {
    this.availableLangs = translocoService.getAvailableLangs() as string[];
    this.selectedLang = translocoService.getActiveLang();
  }

  changeLang(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
