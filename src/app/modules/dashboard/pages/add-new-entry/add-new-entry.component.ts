import * as formJSON from '../../../../../assets/form.json';

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-add-new-entry',
  templateUrl: './add-new-entry.component.html',
  styleUrls: ['./add-new-entry.component.scss'],
})
export class AddNewEntryComponent implements OnInit {
  data: any = formJSON;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    // set dynamic validationtion
    formState: {
      validation: {
        messages: {
          required: 'This field is required',
        },
      },
    },
  };
  fields: FormlyFieldConfig[] = [];
  ngOnInit(): void {
    const fields = this.data.controls.map((control: any) => {
      console.log('control', control);
      const isTextInput = control.type === 'textfield';
      const isSelect = control.type === 'dropdown';
      const isNumber = control.type === 'number';
      const isPassword = control.type === 'password';
      if (isTextInput) {
        this.fields.push({
          key: control.name,
          type: 'input',
          props: {
            label: control.name,
            placeholder: `Type your ${control.name}`,
            description: `This is the ${control.name}`,
            required: control.required,
          },
          hooks: {
            onInit: (field: any) => {
              if (!control.condition) return;
              console.log('control.condition?.control', control.condition);
              const experience = field.parent.formControl.get(
                control.condition?.control
              );
              experience.valueChanges.subscribe((value: any) => {
                const isCondition = `${value} ${control.condition?.operator} ${control.condition?.value}`;
                if (eval(isCondition)) {
                  field.formControl.setValidators([Validators.required]);
                } else {
                  field.formControl.clearValidators();
                }
                field.formControl.updateValueAndValidity();
              });
            },
          },
        });
        return;
      }
      if (isPassword) {
        this.fields.push({
          key: control.name,
          type: 'input',
          props: {
            label: control.name,
            placeholder: `Type your ${control.name}`,
            description: `This is the ${control.name}`,
            required: control.required,
          },
          hooks: {
            onInit: (field: any) => {
              if (!control.condition) return;
              console.log('control.condition?.control', control.condition);
              const experience = field.parent.formControl.get(
                control.condition?.control
              );
              experience.valueChanges.subscribe((value: any) => {
                const isCondition = `${value} ${control.condition?.operator} ${control.condition?.value}`;
                if (eval(isCondition)) {
                  field.formControl.setValidators([Validators.required]);
                } else {
                  field.formControl.clearValidators();
                }
                field.formControl.updateValueAndValidity();
              });
            },
          },
        });
        return;
      }
      if (isSelect) {
        this.fields.push({
          key: control.name,
          type: 'select',
          props: {
            label: control.name,
            placeholder: `Type your ${control.name}`,
            description: `This is the ${control.name}`,
            required: control.required,
            options: control.options?.map((option: any, i: number) => {
              return {
                label: Object.entries(option)[0][1],
                value: Object.entries(option)[1][1],
              };
            }),
          },
          hooks: {
            onInit: (field: any) => {
              if (!control.condition) return;
              console.log('control.condition?.control', control.condition);
              const experience = field.parent.formControl.get(
                control.condition?.control
              );
              experience.valueChanges.subscribe((value: any) => {
                const isCondition = `${value} ${control.condition?.operator} ${control.condition?.value}`;
                if (eval(isCondition)) {
                  field.formControl.setValidators([Validators.required]);
                } else {
                  field.formControl.clearValidators();
                }
                field.formControl.updateValueAndValidity();
              });
            },
          },
        });
        return;
      }
      if (isNumber) {
        this.fields.push({
          key: control.name,
          type: 'input',
          props: {
            label: control.name,
            placeholder: `Type your ${control.name}`,
            description: `This is the ${control.name}`,
            required: control.required,
            min: control.min,
            max: control.max,
          },
          hooks: {
            onInit: (field: any) => {
              if (!control.condition) return;
              console.log('control.condition?.control', control.condition);
              const experience = field.parent.formControl.get(
                control.condition?.control
              );
              experience.valueChanges.subscribe((value: any) => {
                const isCondition = `${value} ${control.condition?.operator} ${control.condition?.value}`;
                if (eval(isCondition)) {
                  field.formControl.setValidators([Validators.required]);
                } else {
                  field.formControl.clearValidators();
                }
                field.formControl.updateValueAndValidity();
              });
            },
          },
        });
        return;
      }
    });
    this.fields = this.fields;
  }
  isFormValid = false;
  formJSON = {};
  onSubmit(e: any) {
    // check if form is valid
    if (this.form.valid) {
      this.isFormValid = true;
      this.formJSON = this.form.value;
    } else {
      this.isFormValid = false;
      console.log('form is invalid');
    }
  }
}
