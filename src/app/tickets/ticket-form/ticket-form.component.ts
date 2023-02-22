import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket, Major } from '../../../models/ticket'; // import the Major enum

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {
  public ticketForm: FormGroup;
  public Major = Major; // add this line to make the enum available in the template

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: ['']
    });
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.student = 'Me';
    this.ticketService.addTicket(ticketToCreate);
  }
}
