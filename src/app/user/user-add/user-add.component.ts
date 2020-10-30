import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../service/group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  groups = [];
  newUserForm: FormGroup;
  message: string = '';
  user: User;

  constructor(private formBuilder: FormBuilder,
              private groupService: GroupService,
              private userService: UserService,
              private route: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        name: ['',[Validators.required, Validators.maxLength(50)]],
        email: ['',[Validators.required, Validators.email]],
        groups: this.formBuilder.group({
          id: ['']
        }),
      }
    )
    this.groupService.getAll().subscribe(groups => {this.groups = groups});
  }

  createUser(){
    this.userService.createUser(this.newUserForm.value).subscribe(() => this.route.navigate(['user']))
    this.message = "Thêm mới thành công!"
    this.user = this.newUserForm.value;
  }
}
