import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatGptRoutingModule } from './chat-gpt-routing.module';
import { ChatGptComponent } from './chat-gpt.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatGptComponent
  ],
  imports: [
    CommonModule,
    ChatGptRoutingModule,
    FormsModule
  ]
})
export class ChatGptModule { }
