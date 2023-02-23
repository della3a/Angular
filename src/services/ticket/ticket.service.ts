import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject      // Add the new ticket to the list
      this.ticketList.push(ticket);
      // Update the observable with the new list of tickets
      this.tickets$.next(this.ticketList);
  }

  deleteTicket(ticket: Ticket) {
    // Find the index of the ticket in the list
    const index = this.ticketList.findIndex(t => t === ticket);

    if (index !== -1) {
      // Remove the ticket from the list
      this.ticketList.splice(index, 1);
      // Update the observable with the new list of tickets
      this.tickets$.next(this.ticketList);
    }
  }

  archiveTicket(ticket: Ticket) {
    // Find the index of the ticket in the list
    const index = this.ticketList.findIndex(t => t === ticket);

    if (index !== -1) {
      // Update the ticket to be archived
      this.ticketList[index].archived = true;
      // Update the observable with the new list of tickets
      this.tickets$.next(this.ticketList);
    }
  }
}
