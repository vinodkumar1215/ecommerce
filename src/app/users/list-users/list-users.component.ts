import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers : any 
  // teacherList:any;
  

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    debugger;
    this.userService.listUsers().subscribe(data => {
    this.listUsers = data;
     });
  }

//   loadTeacherDetails(){
//     this.userService.getTeachers()
//     .subscribe(result=>{
// this.teacherList =result;
//     })
  //}


}
