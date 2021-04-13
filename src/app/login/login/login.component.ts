import { Component, OnInit } from '@angular/core';
import { ErrorLogin } from 'src/app/model/error'
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  listErrorLogin: ErrorLogin [] = [];
  phoneNumber: string;
  constructor(private fb: FormBuilder, public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.auth.loginIn()){
      this.router.navigate(['home']);
    }
    this.validateForm = this.fb.group({
      phoneNumber: [null, [Validators.required]], 
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(form: NgForm): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const phonenumber = form.value.phoneNumber;
    const password = form.value.password;

    this.auth.login(phonenumber, password)
    .subscribe(res => {
      this.router.navigate(['home']);
    },
    error => {
      console.log('Lỗi đăng nhập', error);

      this.listErrorLogin = Object.values(error.error);
      // this.notification.create(
      //   'error',
      //   'Thất bại',
      //   'Xin vui lòng kiểm tra lại thông tin tài khoản');
    }
    );
  }

}
