import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { NameService } from '../service/name.service'
import { Person } from '../model/person';
import { RoleService } from '../service/role.service';
import { Auth } from '../model/auth'


@Component({
  selector: 'app-rest-test',
  templateUrl: './rest-test.component.html',
  styleUrls: ['./rest-test.component.css']
})
export class RestTestComponent implements OnInit {

  person: Person[];
  dataname:string[];
  checkoutForm;
  role:Auth;
  name = new FormControl('');

  constructor(private nameService:NameService, private formBuilder: FormBuilder, private roleService:RoleService) {
    this.checkoutForm = new FormGroup({
      name: new FormControl('')
    });
  }

  ngOnInit() {
    this.nameService.getName().subscribe(data=>{
      this.person = data;
    });
  }

  getRole(){
    this.roleService.getAuth(this.checkoutForm.value.name).subscribe(data=>{
      this.role = data
    });
  }


}
