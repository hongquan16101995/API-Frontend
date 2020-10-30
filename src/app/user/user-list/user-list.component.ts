import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  message: string = '';
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getAll().subscribe(users => {this.userList = users; });
  }

  deleteUser(id: number){
    if(confirm("Are you sure?")) {
      // @ts-ignore
      this.userService.deleteUser(id).subscribe(() => this.userList = this.getAllUser())
      this.message = "Xóa thành công!"
    }
  }
}
