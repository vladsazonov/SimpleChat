import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './MaterialModule';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthorizationService } from './service/authorization.service';
import { MessagesService } from './service/messages.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageComponent } from './message/message.component';
import { SendMessageBarComponent } from './send-message-bar/send-message-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    ChatNavBarComponent,
    ChatWindowComponent,
    MessageComponent,
    SendMessageBarComponent,
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
export class AppModule { }
