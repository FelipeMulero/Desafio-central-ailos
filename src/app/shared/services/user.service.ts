import { USER } from '../mock-data/user.mock-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  validateData = false
  CPF = ''

  constructor() { }

  search(userCPF: any): any {
    for (var index in USER) {
      if (userCPF == USER[index].cpf) {
        return USER[index]
      }
    }
    return -1
  }
}
