//importing components from ang2module
import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
//calling the component
@Component({
    selector: 'my-app',
    template: '<h1>Hello Ang</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent]
})

//AppComponent is our root view layer
export class AppComponent { };