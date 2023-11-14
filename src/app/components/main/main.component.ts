import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H1Component } from '../h1/h1.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    H1Component,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  color: string = '#06D6A0';

  getColor(colorBorder: string) {
    this.color = colorBorder;
  }

  ngOnInit(): void {}
}