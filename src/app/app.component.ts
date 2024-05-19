import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardBlockComponent } from './card-block/card-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardsContainerComponent,CardBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cards';
}
