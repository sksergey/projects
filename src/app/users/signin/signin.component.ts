import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    signinForm: FormGroup;
    user = new User();
    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.createForm();
    }
    createForm() {
        this.signinForm = this.fb.group({
            email: [this.user.email, [Validators.email, Validators.required]],
            password: [this.user.password, [Validators.minLength(4), Validators.required]],
            // isLoggedIn: [this.userService.getIsLoggedIn()]
        });
    }
    onFormSubmit() {
        if (this.signinForm.valid) {
                  this.userService.login();
            let url = '';
            url = this.userService.getRedirectUrl();
            console.log('Redirect Url:' + url);
            this.router.navigate([ url ]);
              } else {
                // this.userService.logout();
                alert('error');
              }
        // let uname = this.loginForm.get('username').value;
        // let pwd = this.loginForm.get('password').value;
        // this.authService.isUserAuthenticated(uname, pwd).subscribe(
        //     authenticated => {
        //         if(authenticated) {
        //             let url =  this.authService.getRedirectUrl();
        //             console.log('Redirect Url:'+ url);
        //             this.router.navigate([ url ]);
        //         } else {
        //             this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        //         }
        //     }
        // );
    }
  ngOnInit() {
  }

}
