import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error = '';
  isPassVisible = false;
  
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', [Validators.email]],
      pass: [''],
    });
  }

  login() {
    const { user, pass } = this.form.value;
    if (this.auth.login(user || '', pass || '')) {
      this.router.navigate(['/home']);
    } else {
      this.error = 'Usuario o contraseña incorrecta';
    }
  }

  changeVisivility() {
    this.isPassVisible = !this.isPassVisible;
  }
}
