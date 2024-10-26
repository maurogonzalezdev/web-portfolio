import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private _loading: boolean = false;

  constructor() {}

  set setLoading(loadStatus: boolean) {
    this._loading = loadStatus;
  }

  get getLoading(): boolean {
    return this._loading;
  }
}
