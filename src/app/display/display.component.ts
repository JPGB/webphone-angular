import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayFocus() {
    const dialDisplayInput = document.querySelector(
      '#dialDisplayInput'
    ) as HTMLInputElement;

    dialDisplayInput.blur();
    dialDisplayInput.focus();
    dialDisplayInput.setSelectionRange(
      dialDisplayInput.value.length,
      dialDisplayInput.value.length
    );
  }
}
