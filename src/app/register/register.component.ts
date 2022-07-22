import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registreForm?: FormGroup
  submitted = false;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    {
  this.registreForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', Validators.required),
      
    })
  }}
registre() {
this.submitted = true;
if (this.registreForm?.invalid) {
  return;
}
this.registerService.registre(this.registreForm?.value).subscribe((response => {
  // this.toastr.success('User is created successfully','Success')
  this.router.navigateByUrl('/login');
}), (error => {
  // this.toastr.error('User already exist','Exist')
}))
}

}

