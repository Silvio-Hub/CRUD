import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() textButton: string = 'Teste';
  @Input() size: string = 'auto';
}
