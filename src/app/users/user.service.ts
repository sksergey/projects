import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn: boolean;
  private redirectUrl: string;
  private signinUrl: string;
  constructor() {
      this.setIsLoggedIn(false);
      this.setRedirectUrl('');
      this.setSigninUrl('/signin');
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
  setSigninUrl(url: string): void {
        this.signinUrl = url;
  }
  login() {
        this.setIsLoggedIn(true);
  }
  logout() {
        this.setIsLoggedIn(false);
  }
}
