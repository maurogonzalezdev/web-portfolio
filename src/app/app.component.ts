import { afterRender, Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

import { FlowbiteService } from './services/flowbite.service';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderSpinnerComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  loading: boolean = true;

  constructor(
    private router: Router,
    private _flowbiteService: FlowbiteService
  ) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          console.log('starting');
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this._emitLoaderStatus().subscribe((data) => {
            this.loading = data;
            this._flowbiteService.loadFlowbite((flowbite) => {
              // On page load or when changing themes, best to add inline in `head` to avoid FOUC

              console.log('Flowbite loaded');
            });
          });
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {

  }

  private _emitLoaderStatus(): Observable<boolean> {
    return of(false).pipe(delay(1500));
  }
}
