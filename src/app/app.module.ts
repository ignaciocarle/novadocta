import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountComponent } from './account/account.component';
import { SingleLessonComponent } from './single-lesson/single-lesson.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    AboutComponent,
    CheckoutComponent,
    SingleCourseComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    AccountComponent,
    SingleLessonComponent,
    LessonsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
