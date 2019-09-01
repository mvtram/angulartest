import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup_form: FormGroup;
   api: string ='http://localhost:3000';
  constructor(
    private _formBuilder: FormBuilder,
 private router: Router,
  ) { }

  ngOnInit() {
    this.signup_form = this._formBuilder.group({

      name: ['John Doe', Validators.required],
      email: ['john@requantive.com', Validators.required],
      phone: ['', Validators.required],
      
    });


  }
    addUser(form){
      //  return this.http.post<any>(`${this.api}/signup`, { form  });
        return {name: 'John Doe',
                email: 'john@requantive.com',
                phone: '9820214708'}
    }
    OnSignup() {
       /* this.addUser(this.signup_form.value)
            .subscribe((data) =>
            {
                console.log(data);
                this.router.navigate(['/home']);
                } );*/
        
      console.log(this.signup_form.value);
        this.router.navigate(['/home']);
    
  }

}
