import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Observable } from 'rxjs';

const old_SUPERHEROES = gql`
  query Superheroes {
    superheroes{
      name,
      description,
      superpowers(order: {superPower:DESC}){
        superPower,
        description
      }
    }
  }
`;
const SUPERHEROES = gql`
query Superheroes {
  superheroes {
    name
    description
    superpowers(order: { superPower: DESC }) {
      superPower
      description
    }
  }
}
`;

const MOVIES = gql`
query Movies {
  movies {
    releaseDate
    title
    description
    instructor
    superhero {
      name
      superpowers {
        superPower
        description
      }
    }
  }
}
`;

const SUPERHERO = gql`
  query Superhero($id: String!) {
    superheroes(id: $id){
      name,
      description,
      superpowers(order: {superPower:DESC}){
        superPower,
        description
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SuperheroserviceService {

  constructor(private apollo: Apollo) { }

  getSuperheroes(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: SUPERHEROES,
    }).valueChanges;
  }
  // getSuperheroesById(id: any): Observable<any> {
  //   return this.apollo.watchQuery<any>({
  //     query: SUPERHERO,
  //     variables:{
  //       id: id,
  //     },
  //   }).valueChanges;
  // }
  getMovies(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: MOVIES
    }).valueChanges;
  }
}

