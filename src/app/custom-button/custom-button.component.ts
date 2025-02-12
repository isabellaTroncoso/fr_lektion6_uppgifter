import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
@Input () buttonMessage!: string;
@Output () clicked = new EventEmitter<void>();

// declare handle click
handledClick() {
  this.clicked.emit();
}
}
