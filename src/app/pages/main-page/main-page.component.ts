import {
  afterRender,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { delay, Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  imports: [LoaderSpinnerComponent,RouterLink],
})
export class MainPageComponent {





}
