import { // 1
    Component, 
    OnInit, 
    Input // 12
} from '@angular/core'; // 2

@Component({ // 5
  selector: 'app-user-item', // 6
  templateUrl: './user-item.component.html', // 7
  styleUrls: ['./user-item.component.css'] // 8
})
export class UserItemComponent implements OnInit {
  @Input() name: string; // 10
  constructor() { // 11
  }

  ngOnInit() {
  }

}
