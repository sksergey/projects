import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn: boolean;
  private redirectUrl: string;
  private signinUrl: string;
  constructor() {
      this.isLoggedIn = false;
      // this.redirectUrl = '/projectslist';
      this.redirectUrl = '';
      this.signinUrl = '/signin';
  }
  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  setIsLoggedIn(val: boolean) {
    this.isLoggedIn = val;
  }
  getRedirectUrl(): string {
        return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
        this.redirectUrl = url;
  }
  getSigninUrl(): string {
        return this.signinUrl;
  }
  // login(isFormValid: boolean) {
  //       if (isFormValid) {
  //         this.isLoggedIn = true;
  //       }
  // }
  login() {
        this.isLoggedIn = true;
  }
  logout() {
        this.isLoggedIn = false;
  }
}
