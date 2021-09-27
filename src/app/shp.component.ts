import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ConstantsModel } from './core/models/constants.model';
import { ConfigOptionsService } from './core/services/config-options.service';
import { generatedString } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { constantsToken } from './core/tokens/constants.token';

@Component({
  selector: 'shp-root',
  templateUrl: './shp.component.html',
  styleUrls: ['./shp.component.scss']
})
export class ShpComponent implements AfterViewInit, OnInit {
  title = 'My Best Shop Market';

  constructor(
    public configOptionsService: ConfigOptionsService,
    public generatorService: GeneratorService,
    public storage: LocalStorageService,
    @Inject(generatedString) public myGeneratedString: string,
    @Inject(constantsToken) public constantsService: ConstantsModel,
  ) { }

  ngOnInit(): void {
    this.storage.setData('ko', 10);
    this.configOptionsService.setConfig({ login: 'my-login' });
  }

  @ViewChild('appTitle')
  titleElement!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.titleElement.nativeElement.innerHTML = this.title;
  }
}
