import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KENDO_GRID } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [KENDO_GRID, FormsModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
  @Input() userName!: string;
  @Output() countChanged = new EventEmitter<number>();
  count: number = 0;

  employees: any[] = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Alice', department: 'HR' }
  ];

  inputValue: string = "Scuhit";
  constructor() { }

  getClickedValue() {
    this.count += 1;
    this.countChanged.emit(this.count);
  }
}
