import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  standalone: true,
  styles: ``
})
export class LoaderSpinnerComponent implements OnInit, OnDestroy {
  public loaderVisibility: boolean = true;
  private status$?: Observable<boolean>;
constructor(){
  this.status$ = this._emitLoaderStatus();
  this.status$.subscribe(data =>{
    this.loaderVisibility = data;
  })
}

  ngOnInit(): void {

  }

  private _emitLoaderStatus(): Observable<boolean>{
    return of(false).pipe(
      delay(3500)
    )
  }
  ngOnDestroy(): void {

  }
}
