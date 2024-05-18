import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseserviceService } from '../../services/firebaseservice.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  todo_data = {title: "", description: "", Img: ""}
  selectedfile : File |  undefined

  constructor(public firebaseservice: FirebaseserviceService){}

  addtodo(){
    console.log("check")
    this.firebaseservice.addtodo(this.todo_data)
    this.firebaseservice.uploadImage(this.selectedfile)
  }

  getfile(data : any){
    console.log("check",data.target.files[0])
    this.selectedfile = data.target.files[0]
    if(this.selectedfile){
      this.todo_data.Img = this.selectedfile?.name
    }
    

  }


}
