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
var student_1 = require('./student');
var StudentFormComponent = (function () {
    function StudentFormComponent() {
        this.courses = ['Computer', 'Electronics',
            'Mechanical', 'Electrical', 'Chemical'];
        this.model = new student_1.Student(308251, 'Ram Singh', this.courses[0], 'Engineering');
        this.submitted = false;
        this.active = true;
    }
    StudentFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    StudentFormComponent.prototype.newStudent = function () {
        var _this = this;
        this.model = new student_1.Student(0, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    StudentFormComponent.prototype.default = function () {
        this.model = new student_1.Student(308251, 'Ram Singh', this.courses[0], 'Engineering');
    };
    Object.defineProperty(StudentFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    StudentFormComponent = __decorate([
        core_1.Component({
            selector: 'student-form',
            templateUrl: 'app/student-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StudentFormComponent);
    return StudentFormComponent;
}());
exports.StudentFormComponent = StudentFormComponent;
//# sourceMappingURL=student-form.component.js.map