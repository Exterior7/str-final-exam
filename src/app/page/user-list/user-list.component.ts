import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  sorterDirection: number = 1;
  sorterKey: string = '';

  phrase: string = "";
  columnKey: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

onChangePhrase(user: User):void {
  this.phrase = (user.target as HTMLInputElement).value;
}

onColumnSelect(key: string): void {
   this.columnKey = key;
 }

  // onColumnSelect(key: string): void {
  //   if (key === this.sorterKey) {
  //     this.sorterDirection = this.sorterDirection * -1;
  //   } else {
  //     this.sorterDirection = 1;
  // }
  // this.sorterKey = key;

  // }


  onDelete(user: User):void {
    let approve = confirm ("Biztosan törölni akarja?")
    if (approve == true) {
      this.userService.remove(user);
    }
  }

}
