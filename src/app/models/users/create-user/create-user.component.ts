import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  addApplForm: FormGroup = new FormGroup({})
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.addApplForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'phone' : new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'website' : new FormControl('',[Validators.required, Validators.minLength(3)])
    })
  }
  createAppl(){
    this.userService.addUser(this.addApplForm.value).subscribe({
      next: (v) => console.log(v),
      error: (e) => alert(e),
      complete: () => alert("Application created")
    })
    this.router.navigate(['/list'])
  }
}
