import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() categories: Category[] | undefined;
  @Output() emmitOnChange = new EventEmitter<Event>();

  isExpanded: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  // methods
  expendedOnClick() {
    this.isExpanded = !this.isExpanded;
  }

  categoryOnChange(event: Event) {
    this.emmitOnChange.emit(event);
  }
}
