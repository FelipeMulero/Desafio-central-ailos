import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showModal: boolean = false
  openModal: boolean = false

  constructor(
    public service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.openModal
  }

  changeModalOpenAccount() {
    this.showModal = true
  }

  changeMaintenancePage() {
    this.router.navigate(['/settings']);
  }

}


