import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<String>();
  name = new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern("^(?!(doublevpartners)$).+$")]);

  constructor() { }

  ngOnInit(): void {
  }
  onGoButton(){
    this.onSearch.emit(this.name.value)
  }
}
