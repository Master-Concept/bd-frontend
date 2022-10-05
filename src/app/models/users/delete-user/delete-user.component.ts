import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId:string='';
  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id']
    })
    this.userService.deleteUser(this.userId).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error("Unable to deleted Application" + e),
      complete: () => console.info("Application deleted")
    })
    alert('Record ' + this.userId + ' deleted!!!')
    this.router.navigate(['/list']);
  }

}
