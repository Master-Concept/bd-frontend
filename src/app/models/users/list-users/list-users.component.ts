import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperheroserviceService } from 'src/app/services/superheroservice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: any;
  dataloaded:boolean=false;
  superheroes: any;
  movies: any;
  constructor(private userService: UserService,
    private superheroService: SuperheroserviceService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(
      data => this.listUsers = data
    )
    this.dataloaded=true;
  }
  btnGetClick(){
    this.userService.listUsers().subscribe(data=>console.log(data))
    alert("GET request triggered")
  }
  btnPostClick(){
    this.userService.addUser(new Object)
    alert("POST request triggered")
  }
  btnPutClick(){
    this.userService.updateUser("1", new Object)
    alert("PUT request triggered")
  }
  btnDeleteClick(){
    this.userService.deleteUser("1").subscribe(data=>console.log(data))
    alert("DELETE request id:1 triggered")
  }
  btnGetQLshClick(){
    this.superheroService.getSuperheroes().subscribe((data)=>{
      this.superheroes = data.data.superheroes
      alert('Please check console log.')
      console.table(this.superheroes)
    })
  }
  btnGetQLMoviesClick(){
    this.superheroService.getMovies().subscribe((data)=>{
      this.movies = data.data.movies
      alert('Please check console log.')
      console.table(this.movies)
    })
  }
  // btnGetQLClickById(){
  //   var id = "0CD755C2-92A3-4BF9-85EA-3E3C5884C2C4"
  //   this.superheroService.getSuperheroesById(id).subscribe((data)=>{
  //     this.superheroes = data.data.superheroes;
  //     console.table(this.superheroes)
  //   })
  // }
}
