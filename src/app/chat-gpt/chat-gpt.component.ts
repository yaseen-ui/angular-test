import { Component, OnInit } from '@angular/core';
import { ChatGptService } from './chat-gpt.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGptComponent implements OnInit {

  constructor(public chatGptService: ChatGptService) { }
  public data = 'baby playing chess';
  public response: any;

  ngOnInit(): void {
    this.getImages();
  }

  public getImages() {
    this.response = '';
    this.chatGptService.chatGPTRequest({
      "prompt": this.data,
      "n": 2,
      "size": "256x256"
    }).subscribe((response: any)=> {
     this.response = response;
    })
  }
}
