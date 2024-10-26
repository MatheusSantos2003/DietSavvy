import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalInfoService } from '../services/personal-info.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'nutrition-app-first-steps',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './first-steps.component.html',
  styleUrl: './first-steps.component.scss',
})
export class FirstStepsComponent {

  calories = new FormControl('',[Validators.minLength(4)])
  weight = new FormControl('',[])
  height = new FormControl('',[])
  gender = new FormControl('',[])
  age = new FormControl('',[])

  currentStep = 0;
  userKnowsCalories?:boolean;



  constructor(
    private personalInfoService: PersonalInfoService,
    private authService: AuthService
  ) {

  }

  nextStep() {

    if(this.currentStep === 0) this.currentStep = 1;

    if(!this.calories.value && (!this.weight.value && !this.height.value && !this.gender.value && !this.age.value)) {

        this.setFormErrors();
        return;

    }

    // check if calories is set
      if(this.calories.valid && this.calories.value) {

        this.currentStep = 3;
        return;

      } else {

        if(!this.weight.value || !this.height.value || !this.gender.value || !this.age.value) {
          return;
        }

        this.currentStep++;
      }

  }

  previousStep() {

    if(this.currentStep === 1) {
      if(this.calories) this.calories.setValue(null);
      if(this.weight) this.weight.setValue(null);
      if(this.height) this.height.setValue(null);
      if(this.gender) this.gender.setValue(null);
      if(this.age) this.age.setValue(null);
    }

    this.currentStep--;
    this.clearFormErrors();
  }

  setFormErrors() {

    this.calories.setErrors({ required: true });
    this.calories.markAsTouched();

    this.weight.setErrors({ required: true });
    this.weight.markAsTouched();

    this.height.setErrors({ required: true });
    this.height.markAsTouched();

    this.gender.setErrors({ required: true });
    this.gender.markAsTouched();

    this.age.setErrors({ required: true });
    this.age.markAsTouched();

  }

  clearFormErrors() {

    this.calories.setErrors(null);
    this.weight.setErrors(null);
    this.height.setErrors(null);
    this.gender.setErrors(null);
    this.age.setErrors(null);

  }

  changeUserKnowsCalories(knows: boolean) {
    this.userKnowsCalories = knows;
    this.currentStep++;
  }

  isValidNumericKey(event: KeyboardEvent): boolean {
    const key = event.key;
    if (key === 'Backspace' || key === 'Delete') {
      return true;
    }
    const numericKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return numericKeys.includes(key);
  }


}
