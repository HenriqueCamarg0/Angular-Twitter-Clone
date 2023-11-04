import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  tweetMessage: string = ""
	tweetMaxLength: number = 244
	tweetRemain: number = this.tweetMaxLength

	constructor(private service: MessagesService) {

	}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

	sendTweet() {
		this.service.addMessage(this.tweetMessage)
		this.tweetMessage = ""
		this.tweetRemain = this.tweetMaxLength
	}

	changeTweet() {
		this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length
	}

}