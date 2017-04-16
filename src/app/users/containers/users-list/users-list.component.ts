import { Component, OnInit } from '@angular/core';

interface User {
  "userId": number,
  "user": string,
  "stateId": string,
  "name": string,
  "surnames": string,
  "displayName":string,
  "NIF": string,
  "email": string,
  "birthDay": string,
  "phoneMobile": string,
  "subcentreId": number,
  "groupsIds": number,
  "groupsNames": string
}

@Component({
  selector: 'app-users-list',
  template: `
    <h2> Listado de usuarios </h2>
    <ul>  
      <li *ngFor="let user of users;"> {{ user.displayName }}</li>
    </ul>
  `,
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  users: User[] = [
    {
      "userId": 60,
      "user": "Carlos",
      "stateId": "A",
      "name": "Carlos",
      "surnames": "Carmona Alcántara",
      "displayName": "Carlos Carmona Alcántara",
      "NIF": "45601041E",
      "email": "carlos@coderty.com",
      "birthDay": "1986-06-17T22:00:00.000Z",
      "phoneMobile": "669576510",
      "subcentreId": 1,
      "groupsIds": 1,
      "groupsNames": "Administración"
    },
    {
      "userId": 61,
      "user": "alo",
      "stateId": "A",
      "name": "Alvaro",
      "surnames": "Quiros",
      "displayName": "Alvaro Quiros",
      "NIF": "75721277X",
      "email": "alvaro@coderty.com",
      "birthDay": "1987-09-23T22:00:00.000Z",
      "phoneMobile": "600092666",
      "subcentreId": 1,
      "groupsIds": 1,
      "groupsNames": "Administración"
    },
    {
      "userId": 62,
      "user": "Rafa",
      "stateId": "A",
      "name": "Rafa",
      "surnames": "Prats",
      "displayName": "Rafa Prats",
      "NIF": null,
      "email": "rafa@coderty.com",
      "birthDay": "1988-12-31T23:00:00.000Z",
      "phoneMobile": null,
      "subcentreId": 1,
      "groupsIds": 2,
      "groupsNames": "Tecnicos"
    },
    {
      "userId": 63,
      "user": "David",
      "stateId": "A",
      "name": "David",
      "surnames": "Lopez",
      "displayName": "David Lopez",
      "NIF": null,
      "email": "david@coderty.com",
      "birthDay": "1899-12-31T23:00:00.000Z",
      "phoneMobile": null,
      "subcentreId": 1,
      "groupsIds": 2,
      "groupsNames": "Tecnicos"
    },
    {
      "userId": 64,
      "user": "cato",
      "stateId": "A",
      "name": "Torcuatio",
      "surnames": "Pollatos Domene",
      "displayName": "Torcuatio Pollatos Domene",
      "NIF": null,
      "email": "cato@coderty.com",
      "birthDay": null,
      "phoneMobile": null,
      "subcentreId": 1,
      "groupsIds": 2,
      "groupsNames": "Tecnicos"
    },
    {
      "userId": 66,
      "user": "Antonio",
      "stateId": "A",
      "name": "Antonio",
      "surnames": "Genaro",
      "displayName": "Antonio Genaro",
      "NIF": null,
      "email": "antonio@coderty.com",
      "birthDay": null,
      "phoneMobile": null,
      "subcentreId": 1,
      "groupsIds": 2,
      "groupsNames": "Tecnicos"
    },
    {
      "userId": 67,
      "user": "Maria",
      "stateId": "A",
      "name": "María José",
      "surnames": "Montero Ramirez",
      "displayName": "María José Montero Ramirez",
      "NIF": null,
      "email": "maria@coderty.com",
      "birthDay": "1983-01-10T23:00:00.000Z",
      "phoneMobile": null,
      "subcentreId": 1,
      "groupsIds": 1,
      "groupsNames": "Administración"
    },
    {
      "userId": 68,
      "user": "Jose",
      "stateId": "A",
      "name": "Jose Antonio",
      "surnames": "Ruiz Santiago",
      "displayName": "Jose Antonio Ruiz Santiago",
      "NIF": null,
      "email": "jose@coderty.com",
      "birthDay": "1985-06-27T22:00:00.000Z",
      "phoneMobile": null,
      "subcentreId": 1,
      "groupsIds": 2,
      "groupsNames": "Tecnicos"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
