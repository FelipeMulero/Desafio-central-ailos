import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() verifyInitRender = true;
  @Input() data = '';

  cpf: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {
    this.cpf = this.formBuilder.group({
      cpf: [this.data, Validators.compose([Validators.required, Validators.minLength(11)])]
    })
  }

  ngOnInit(): void {
    if (!this.verifyInitRender) {
      this.cpf.disable()
      return
    } 
      this.userService.validateData = false
  }

  verifyCpfUser(): void {
    if (this.cpf.valid) {
      const forms: User = this.cpf.value
      let User = this.userService.search(forms.cpf)
      if (User != -1) {
        this.userService.validateData = true
        this.router.navigate(['/user', User.cpf])
        return
      } 
        this.matSnackBar.open('CPF não cadastrado no sistema.', '', { duration: 1500, 
        horizontalPosition: 'right', verticalPosition: 'top', 
        panelClass: ['msg-erro']});

       return
    }
      
    this.matSnackBar.open('CPF inválido! Digite um cpf valido.', '', { duration: 1500, 
    horizontalPosition: 'right', verticalPosition: 'top',
    panelClass: ['msg-erro']});
  }
}
