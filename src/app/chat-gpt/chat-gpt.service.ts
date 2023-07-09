import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'https://api.openai.com/v1/images/generations';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  // API-Key = 
  constructor(private http: HttpClient) { }
  public chatGptKey = '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';

  public chatGPTRequest(body: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.chatGptKey}`
    }
    return this.http.post(API_ENDPOINT, body, {headers});
  }

}
