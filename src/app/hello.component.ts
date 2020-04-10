import { Component, Input } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
constructor(){
//usage like redux
  const a=new Observable(subs=>{
    console.log("test");
    subs.next("start");
   
    subs.complete();
    //no param passage
    setTimeout(()=>
     subs.next("end"),0);
     //async call
      subs.error('err')
      //error
  })
// .subscribe (1 param=>subscribe receives param next(), 2 param => receives error param,3 param =>complete no param passage just infrms observer complete

  a.subscribe(res=>{console.log('1',res)},error=>{
    console.log("err",error)
  },() =>{
    console.log("comp")
  });
   a.subscribe(res=>{console.log('2',res)});
}
}
