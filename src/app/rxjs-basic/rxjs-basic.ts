import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css',
  standalone: true
})
export class RxjsBasic {

  // 2nd way to create observable
  cityList$ = of(['Gorakhpur', 'Lucknow', 'Anand Nagar']); // its show whole array value at a time
  pincodeList$ = of(['27301', '23801', 273164]);

  // 3rd way to create observable
  districtList$ = from(['Maharajganj', 'Basti', 'BBK', 'GKP', 'LKO']); // its show one by one value

  // 4th way to create observable
  interval$ = interval(1000); // its run in every 1 second interval

  // 5th way to create observable 
  timer$ = timer(5000); // its wait 5 second then run

  constructor() {

    //******************** basic 1st way to create observable **************************
    const myObserval$ = new Observable<string>((observer) => {
      observer.next("Its showing, how we can create basic observable");
      observer.next('Hello');
      observer.next('Angular');
      observer.complete();
    });

    myObserval$.subscribe((res: string) => {
      // debugger
      console.log("get observable value=>", res)
    });


    // ********************* 2nd way to how call onservable ************************
    this.cityList$.subscribe((res: string[]) => {
      // debugger
      console.log("city list=>", res);
    })

    this.pincodeList$.subscribe((res: (string | number)[]) => {
      // debugger
      console.log("Pincode list=>", res);
    })

    //****************************** 3rd way to call onservable ********************************
    this.districtList$.subscribe((res: string) => {
      console.log("district list=>", res);
    })

    // ******************** 4th way to call observable ***********
    this.interval$.subscribe((res: number) => {
      console.log("Interver =>", res);
    })

    // ******************** 5th way to call observable ***********
    this.timer$.subscribe(res => {
      console.log("Timer excuted")
    })
  }

}
