import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  constructor(
    public fb : FormBuilder,
    public auth: AuthService
  ) {
    this.form = fb.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['+591'],
      password: ['', [Validators.required,Validators.min(6)]],
      confirmPassword: ['', [Validators.required,Validators.min(6)]],
    })
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  onSubmitForm(){
    if(this.form.valid){
      /////
      console.log('valores', this.form.value)
      const {email, password} =this.form.value
      this.auth.registerUser(email, password, this.form.value)

    }
    else {
      /////
    }
  }

}