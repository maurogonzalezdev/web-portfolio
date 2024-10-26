import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  standalone: true,
  imports: [RouterLink]
})
export class BlogPageComponent{}
