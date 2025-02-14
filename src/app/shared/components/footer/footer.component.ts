// footer.component.ts
import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatFormField} from '@angular/material/form-field';
import {MatIconAnchor, MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    MatIcon,
    MatFormField,
    MatIconAnchor,
    RouterLink,
    MatInput,
    MatIconButton
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { }
