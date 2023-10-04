import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosRandomService } from 'src/app/services/usuarios-random.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // DECLARACION
  loginForm: FormGroup      // PARA VALIDAR EL FORMULARIO
  user: any                 //PARA CAPTURAR TODA LA INFO DEL USUARIO
  emailValue?: string       // PARA CAPTURAR EL EMAIL DEL USUARIO ?: SE PUEDE INSTANCIAR (ASIGNAR VARIABLE) DESPUES, !: PUEDE SER NULO
  passValue?: string        // PARA CAPTURAR LA PASSWORD DEL USUAIO

  constructor(
    private router: Router,
    private usuariosRandom: UsuariosRandomService,
    private formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
     }

  ngOnInit() {
    this.usuariosRandom.getRandom().subscribe(
      (data) => {
        //console.log(data)
        this.user = data.results[0]  // RELLENAMOS EL USUARIO
        this.emailValue = this.user.email
        this.passValue = this.user.login.password
      })
  }
  login() {
    this.router.navigate(['jugadores']);
  }

}
