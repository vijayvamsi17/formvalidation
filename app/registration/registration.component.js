"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var RegistrationComponent = (function () {
    function RegistrationComponent(fb) {
        this.submitted = false;
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'firstname': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'lastname': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'mobile': ['', forms_1.Validators.compose([forms_1.Validators.pattern('[0-9]{10}')])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.firstname = this.form.controls['firstname'];
        this.lastname = this.form.controls['lastname'];
        this.mobile = this.form.controls['mobile'];
    }
    RegistrationComponent.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            console.log(values);
        }
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'registration',
            templateUrl: 'registration.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map