import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './MaterialModule';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginPage} from './pages/login/login.page';
import {AuthorizationService} from './services/authorization.service';
import {MessagesService} from './services/messages.service';
import {AppRoutingModule} from './app-routing.module';
import {HomePage} from './pages/home/home.page';
import {ChatNavBarComponent} from './components/chat-nav-bar/chat-nav-bar.component';
import {ChatWindowComponent} from './components/chat-window/chat-window.component';
import {MessageComponent} from './components/message/message.component';
import {SendMessageBarComponent} from './components/send-message-bar/send-message-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationPage} from './pages/registration/registration.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    HomePage,
    ChatNavBarComponent,
    ChatWindowComponent,
    MessageComponent,
    SendMessageBarComponent,
    RegistrationPage,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthorizationService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
