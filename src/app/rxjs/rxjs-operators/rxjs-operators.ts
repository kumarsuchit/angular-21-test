import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, from, map, of } from 'rxjs';
import { MasterService } from '../../services/master-service';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rxjs-operators',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-operators.html',
  styleUrl: './rxjs-operators.css'
})



export class RxjsOperators implements OnInit {
  numberList$ = from([11, 12, 13, 14, 15, 16, 17, 18, 20]); // its return one by one value at subscribe time
  numberList_2$ = of([11, 12, 13, 14, 15, 16, 17, 18, 20]); // its retun whole value at subscribe time


  userData = signal<User[]>([]);

  searchFormGroup: FormGroup;

  constructor(
    private masterService: MasterService,
    private fb: FormBuilder
  ) {
    // returning value one by one
    this.numberList$.subscribe((res: number) => {
      console.log("get numbers=>", res);
    })

    this.numberList$.subscribe({
      next: (res: number) => {
        console.log("get number new way=>", res);
      },
      error: (err) => {
        console.log("Error in get numbers observal=>", err);
      }
    })

    // here we want get only even number so will aply rxjs filter method
    this.numberList$.pipe(
      filter((val: number) => val % 2 === 0)
    ).subscribe((res: number) => {
      console.log("get even number=>", res);
    })

    this.numberList_2$.subscribe((res: number[]) => {
      console.log("get numbers_2=>", res);
    })

    this.numberList_2$.pipe(
      map((arrayVal: number[]) => arrayVal.filter((val: number) => val % 2 == 0))
    ).subscribe((res: number[]) => {
      console.log("get even number_2=>", res);
    })

    // search reactive form
    this.searchFormGroup = this.fb.group({
      searchInput: ['', Validators.required]
    });

    // here will use RXJS debounce bezc don'twant to get value on every input enter
    this.searchFormGroup.controls['searchInput'].valueChanges.pipe(
      debounceTime(500), // wait 500 milisecond
      distinctUntilChanged() // ingnore duplicate
    ).subscribe((inputChangesValue: string) => {
      console.log("get search input value=>", inputChangesValue)
    })
  }

  ngOnInit(): void {
    this.masterService.getPlaysholderUserData().subscribe({
      next: (resData: any) => {
        this.userData.set(resData);
        console.log("get res data=>", resData);
      },
      error: (err) => {
        console.log("API error message=>", err);
      }
    })
  }

}
