/// <reference path="../typings.d.ts" />
import { Component } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {ElToolbar} from './components/elToolbar';
import {ElTest} from './components/elTest';

@Component({
  moduleId: module.id,
  selector: 'elements-proto-app',
  templateUrl: 'elements-proto.component.html',
  styleUrls: ['elements-proto.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ElToolbar,
    ElTest
  ],
  providers: [MdIconRegistry, MdRadioDispatcher]
})
export class ElementsProtoAppComponent {
  title: String = 'elements-proto works!';

  dogs: Object[] = [
    {name: "Porter"},
    {name: "Mal"},
    {name: "Razzle"},
    {name: "Koby"},
    {name: "Molly"},
    {name: "Husi"}
  ];
}
