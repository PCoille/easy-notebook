import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { FreeWriteService } from 'src/app/services/free-write.service';

@Component({
  selector: 'app-activity-write',
  templateUrl: './activity-write.component.html',
  styleUrls: ['./activity-write.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActivityWriteComponent implements OnInit {

  input = '';

  constructor(private freeWriteService: FreeWriteService) { }

  ngOnInit(): void {
    this.input = this.freeWriteService.getFreeWrites();
  }

  public saveInput() {
    this.freeWriteService.setFreeWrites(this.input);
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }

}