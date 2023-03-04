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
  loginUserData = {email:"", password:""};
  constructor(private formBuilder: FormBuilder,private route: Router, private auth: AuthServiceService) { }
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[A-Za-z._%+-]+@nwmissouri.edu')]],
      password: ['', [Validators.required]]
  });
}
get f() { return this.loginForm.controls; }
onSubmit() {
  this.submitted = true;
  if( this.loginForm.invalid) {
    this.route.navigate(['/home']);
  }
  
}

// login() {
// this.auth.login(this.loginUserData).subscribe(
//   (res:any) => {
//     // this.route.navigate(['/home'])
//     console.log('login response',res)
//   },
//   err => console.log('login response',err)

// )
// }
}
