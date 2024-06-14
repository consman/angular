import {Location} from '@angular/common';
import {Component, Input} from '@angular/core';
import {VersionInfo} from 'app/navigation/navigation.service';
import { rewriteLink } from 'app/shared/angular-dot-dev-redirects';

@Component({
  selector: 'aio-mode-banner',
  template: `
    <div *ngIf="mode === 'archive'" class="mode-banner alert archive-warning">
      <p>
        This is the <strong>archived documentation for Angular v{{ version.major }}.</strong> Please visit
        <a [href]="currentPath">angular.dev</a>
         to see this page for the current version of Angular.
      </p>
    </div>
  `,
})
export class ModeBannerComponent {
  @Input() mode: string;
  @Input() version: VersionInfo;

  currentPath: string;

  constructor(private location: Location) {
    this.currentPath = rewriteLink(this.location.path());
  }
}