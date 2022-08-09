import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginClientService } from './login-client.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  loginForm?: FormGroup;
  submitted = false;
  constructor(private loginService: LoginClientService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password: new FormControl('', Validators.required),

      })
  }


  login() {
     this.submitted = true;
    if (this.loginForm?.invalid) {
      return;
    }
    this.loginService.login(this.loginForm?.value).subscribe((response: any) => {
      console.log(response);
      // this.toastr.success('login successffly','Success' )
      this.router.navigateByUrl('/listCategory');
       localStorage.setItem('AuthUser',response.token);
    }, (error: any) => { console.log(error)
      // this.toastr.error('User does not exist','Failed' )
    })
  }
}

