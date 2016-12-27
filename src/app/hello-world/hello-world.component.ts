import { // 1
    Component, // 3
    OnInit // 4
} 
from '@angular/core'; // 2

@Component({ // 5
  selector: 'app-hello-world', // 6
  templateUrl: './hello-world.component.html', // 7
  styleUrls: ['./hello-world.component.css'] // 8
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

