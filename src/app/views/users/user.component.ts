
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/classes/user.model';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit(): void {
    this.user = this.userService.searchCPF(this.route.snapshot.paramMap.get('Cpf'))
    console.log(this.cpfIsBlocked())
  }

  cpfIsBlocked(): boolean {
    if (this.user.SituacaoCPF == 'Regular') {
      return true
    } else {
      return false
    }
  }

}
