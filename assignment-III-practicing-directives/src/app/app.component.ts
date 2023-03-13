import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    visible = true

    logs = []

    toggleVisibility() {
        this.logs = [...this.logs, new Date().toISOString()]
        this.visible = !this.visible
    }
}
