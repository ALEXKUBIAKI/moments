import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Moment } from '../../Moment';
@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
@Input() btnText! :string;
@Output() onSubmit = new EventEmitter<Moment>();
momentForm!:FormGroup;

ngOnInit():void{
this.momentForm =new FormGroup(
  {
    id: new FormControl(''),
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    image: new FormControl(''),
  });
}
get title(){
  return this.momentForm.get('title')!;
}
get description(){
  return this.momentForm.get('description')!;
}

onFileSelected(event: any){
  const file: File =event.target.files[0];
  this.momentForm.patchValue({image:file});
}
Submit()
{
  if (this.momentForm.invalid)
  {
    return;
  }
  console.log(this.momentForm.value);
  this.onSubmit.emit(this.momentForm.value);
}
}
