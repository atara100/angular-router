import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DashboardComponent,
    UsersComponent,
    SettingsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
