import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial-pad',
  templateUrl: './dial-pad.component.html',
  styleUrls: ['./dial-pad.component.css'],
})
export class DialPadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  insertToDisplay(e: MouseEvent) {
    const numberPressed = (e.currentTarget as HTMLDivElement).innerHTML
      .trim()
      .split(' ')[0];

    const dialDisplayInput = document.querySelector(
      '#dialDisplayInput'
    ) as HTMLInputElement;

    dialDisplayInput.value = dialDisplayInput.value + numberPressed;

    dialDisplayInput.blur();
    dialDisplayInput.focus();
  }
}
