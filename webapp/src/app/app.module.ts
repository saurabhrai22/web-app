import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreakpointsComponent } from './breakpoints/breakpoints.component';
import { EditorComponent } from './editor/editor.component';
import { MainiframeComponent,SafePipe } from './mainiframe/mainiframe.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { LogoutComponent } from './logout/logout.component';
import { VirtualAssistantComponent } from './virtual-assistant/virtual-assistant.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { RichtextEditorComponent } from './richtext-editor/richtext-editor.component';
import { CtaEditorComponent } from './cta-editor/cta-editor.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';
import { OldNewToggleComponent } from './old-new-toggle/old-new-toggle.component';
import { NotificaionBoxComponent } from './notificaion-box/notificaion-box.component';

const appRoutes: Routes = [
  {path: '',	component: HomeComponent},
  {path: 'edit',	component: HomeComponent},
  {path: 'login',	component: LoginComponent},
  { path:'logout', component: LogoutComponent},
  { path:'**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SafePipe,
    BreakpointsComponent,
    EditorComponent,
    MainiframeComponent,
    LogoutComponent,
    VirtualAssistantComponent,
    TextEditorComponent,
    RichtextEditorComponent,
    CtaEditorComponent,
    ImageEditorComponent,
    OldNewToggleComponent,
    NotificaionBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
