import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project!';
   todaydate;
   componentproperty;
   emailid;
   formdata;
   ngOnInit() {
      this.formdata = new FormGroup({
         emailid: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
         passwd: new FormControl("", this.passwordvalidation),
         salary: new FormControl("", Validators.compose([Validators.required, Validators.min(0), Validators.max(100)]))
      });
   }
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length <= 5) {
         return {"passwd" : true};
      }
   }
   onClickSubmit(data) {this.emailid = data.emailid;}
}
