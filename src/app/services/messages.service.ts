import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMessage} from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  public messIndex: number;
  public newMessage: IMessage;
  public $messages = new BehaviorSubject<IMessage[]>([]);
  public $editStatus = new BehaviorSubject<boolean>(false);

  constructor() {
    this.$messages.next(JSON.parse(localStorage.getItem('messArr')) || []);
  }

 public getEditStatus(): Observable<boolean> {
    return this.$editStatus.asObservable();
  }

  public getMessages(): Observable<IMessage[]> {
    return this.$messages.asObservable();
  }

  public sendMessage(id: string, Message: string, Date: string, currentUserId: string, SenderName: string): void {
    this.newMessage = {
      messId: id,
      message: Message,
      date: Date,
      userId: currentUserId,
      senderName: SenderName,
    };
    this.$messages.value.push(this.newMessage);
    this.$messages.next(this.$messages.value);
    localStorage.setItem('messArr', JSON.stringify(this.$messages.value));
  }

  public deleteMessage(messId: string): void {
    const deletedMessage = this.$messages.value.find(id => messId === id.messId);
    const currentUserId = localStorage.getItem('id');
    const deletedMessageIndex = this.$messages.value.findIndex(
      elem => elem.messId === deletedMessage.messId && elem.userId === currentUserId);
    if (deletedMessageIndex > -1) {
      this.$messages.value.splice(deletedMessageIndex, 1);
      this.$messages.next(this.$messages.value);
    }
    localStorage.setItem('messArr', JSON.stringify(this.$messages.value));
  }

  public editMessage(messId: string): void {
    const findedMessage = this.$messages.value.find(id => messId === id.messId);
    this.messIndex = this.$messages.value.findIndex(elem => elem.messId === findedMessage.messId);
    if (this.messIndex > -1 && messId === findedMessage.messId) {
      this.$editStatus.next(true);
    } else {
      this.$editStatus.next(false);
    }
  }

  public sendEditedMess(newMessage: string): void {
    this.$messages.value[this.messIndex].message = newMessage;
    localStorage.setItem('messArr', JSON.stringify(this.$messages.value));
    this.messIndex = null;
    this.$editStatus.next(false);
  }
}
