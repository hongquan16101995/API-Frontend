import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../service/group.service';
import {UserService} from '../../service/user.service';
import {User} from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: number;
  groups = [];
  newUserForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private groupService: GroupService,
              private userService: UserService,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.router)
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.newUserForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(49)]],
        email: ['', [Validators.required, Validators.email]],
        groups: this.formBuilder.group({
          id: ['']
        }),
      }
    );

    this.groupService.getAll().subscribe(groups => {
      this.groups = groups;
    });

    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
      this.newUserForm.patchValue(user)
    });
  }

  editUser() {
    console.log(this.newUserForm.value)
    this.newUserForm.value.id = this.user.id;
    this.newUserForm.value.role = this.user.role;
    this.newUserForm.value.password = this.user.password;
    this.userService.editUser(this.newUserForm.value).subscribe(() => this.route.navigate(['user']));
  }

}
