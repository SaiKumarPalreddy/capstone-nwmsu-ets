import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/auth/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup | any;
  submitted = false;
  loginUserData = {email:"test@nwmissouri.edu", password:"test@123$"};
  constructor(private formBuilder: FormBuilder,private route: Router, private auth: AuthServiceService) { }
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['test@nwmissouri.edu', [Validators.required,Validators.pattern('^[A-Za-z._%+-]+@nwmissouri.edu')]],
      password: ['test@123$', [Validators.required]]
  });
}
get f() { return this.loginForm.controls; }
onSubmit() {
  this.submitted = true;
  if( !this.loginForm.invalid) {
    this.route.navigate(['/home']);
    // console.log(`login`);
  }
  
}

// onSubmit() {
//   console.log(this.loginUserData);
//   this.submitted = true;
// this.auth.login(this.loginUserData).subscribe(
//   res => {
//     this.route.navigate(['/home'])
//   }

  
// )}


}
// {
//   next(response){
//     // this.route.navigate(['/home'])
//     console.log('login response',response)
//   }
// }