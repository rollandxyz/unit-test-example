import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { WorkItem } from '../models/work-item';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() { }

  getObservWorks(): Observable<WorkItem> {
    return from(this.generateWorks());
  }

  getWorks(): WorkItem[] {
    return this.generateWorks();
  }

  private generateWorks(): WorkItem[] {
    const works: WorkItem[] = [];
    works.push(new WorkItem(1, 'work-01', 'work item one'));
    works.push(new WorkItem(1, 'work-02', 'work item two', '{LoanNumber:123456791}'));
    works.push(new WorkItem(1, 'work-03', 'work item three', '{LoanNumber:123456792}', 11111));
    works.push(new WorkItem(1, 'work-04', 'work item four', '{LoanNumber:123456793}', 11111, 22222));

    return works;
  }
}
