import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  ticketHasBeenDeleted: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  getTicketClass(value: string) {
    switch (value) {
      case "SI":
        return "fas fa-code-branch";
      case "GE":
        return "fas fa-file-code";
      case "GB":
        return "fas fa-coffee";
      default:
        return "fas fa-question";
    }
  }

  deleteTicket() {
    this.ticketHasBeenDeleted.emit(this.ticket);
  }
}
