import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  langs: string[] = [];
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('es');
    this.translate.addLangs(['es','en']);
    this.langs = this.translate.getLangs();
   }

  ngOnInit(): void {
  }

      /**
   * Change Language method
   */
       changeLang(lang: string) {
        this.translate.use(lang);
        }

}
