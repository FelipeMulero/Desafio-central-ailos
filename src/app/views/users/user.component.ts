
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user!: User;

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.search(this.route.snapshot.paramMap.get('cpf'))
  }

  hasBlockedCPF(): boolean {
    if (this.user.verifyCPF == 'Regular') {
      return true
    }
      return false
  }

}
