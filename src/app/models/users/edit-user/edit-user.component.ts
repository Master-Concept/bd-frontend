import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId:any
  applDetails:any
  editApplForm: FormGroup = new FormGroup({})
  dataloaded:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private formBuilder:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id']
    })
    if(this.userId != ''){
      this.userService.viewUser(this.userId)
      .toPromise()
      .then(data=>{
        this.applDetails = data;
        Object.assign(this.applDetails,data)
        this.editApplForm = this.formBuilder.group({
          'id': new FormControl(this.applDetails.id),
          'name': new FormControl(this.applDetails.name),
          'email':new FormControl(this.applDetails.email),
          'phone':new FormControl(this.applDetails.phone),
          'username':new FormControl(this.applDetails.username),
          'website':new FormControl(this.applDetails.website)
        })
        this.dataloaded=true
      })
      .catch(err=>{console.log(err)})
    }
  }
  updateAppl(){
    this.userService.updateUser(this.userId,this.editApplForm.value)
    console.log(this.editApplForm.value)
    alert('Record ' + this.userId + ' updated!!!')
    this.router.navigate(['/list'])
  }
}
