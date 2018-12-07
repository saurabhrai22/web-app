var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreakpointsComponent } from './breakpoints/breakpoints.component';
import { EditorComponent } from './editor/editor.component';
import { MainiframeComponent, SafePipe } from './mainiframe/mainiframe.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { LogoutComponent } from './logout/logout.component';
import { VirtualAssistantComponent } from './virtual-assistant/virtual-assistant.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { RichtextEditorComponent } from './richtext-editor/richtext-editor.component';
import { CtaEditorComponent } from './cta-editor/cta-editor.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'edit', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', component: PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                ImageEditorComponent
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map