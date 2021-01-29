import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { NavItemsComponent } from './main-site/header/nav-items/nav-items.component';
import { HeaderComponent } from './main-site/header/header.component';
import { FooterComponent } from './main-site/footer/footer.component';
import { AboutComponent } from './main-site/about/about.component';
import { ServicesComponent } from './main-site/services/services.component';
import { GalleryComponent } from './main-site/gallery/gallery.component';
import { ClientsComponent } from './main-site/clients/clients.component';
import { ContactComponent } from './main-site/contact/contact.component';
import { QuickLinkComponent } from './main-site/footer/quick-link/quick-link.component';
import { SocialLinkComponent } from './main-site/footer/social-link/social-link.component';
import { CopyrightComponent } from './main-site/footer/copyright/copyright.component';
import { HeaderImgComponent } from './main-site/header/header-img/header-img.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { DashHeaderComponent } from './dash/dash-header/dash-header.component';
import { DashMainComponent } from './dash/dash-main/dash-main.component';
import { FeedbackFormComponent } from './main-site/contact/feedback-form/feedback-form.component';
import { HomeComponent } from './main-site/home/home.component';

const routes:Routes=[
  {path:'', component:HomeComponent,
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'services',component:ServicesComponent},
      {path:'clients',component:ClientsComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'contact',component:ContactComponent},
    ]
  },
  {path:'', component:LoginRegisterComponent,
    children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent}
    ]
  },
  {path:'dash', component:DashComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginRegisterComponent,
    MainSiteComponent,
    NavItemsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ClientsComponent,
    ContactComponent,
    QuickLinkComponent,
    SocialLinkComponent,
    CopyrightComponent,
    HeaderImgComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    DashHeaderComponent,
    DashMainComponent,
    FeedbackFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
