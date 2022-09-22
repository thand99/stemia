import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login:any = FormGroup;
  users:any = [];

  private formSubmitAttempt!: boolean;

  email!: FormControl;
  password!: FormControl;

  LoginStatus$ = new BehaviorSubject<boolean>(false);

  constructor(
    private fb:FormBuilder,
    private router:Router, 
    private route: ActivatedRoute,
    private authService: CommonService,
    private commserv:CommonService) { }

  ngOnInit(): void {

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required,Validators.maxLength(10),Validators.minLength(5)]);

    this.login = this.fb.group({
      'email' : this.email,
      'password' : this.password
    })

    this.commserv.getUser().subscribe((data:any)=>{
      this.users = data;
    })
  }
  loginSubmit(data:any){
    console.log(data);
  }
  onSubmit() {
    if (this.login.valid) {
      this.authService.login(this.login.value);
    }
    this.formSubmitAttempt = true;
  }

}
