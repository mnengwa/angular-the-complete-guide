import { Component } from "@angular/core";


@Component({
    selector: "app-mixed-alert",
    template: `<div>
        <app-success-alert></app-success-alert>
        <app-warning-alert></app-warning-alert>
    </div>`
})
export class MixedAlertComponent {

}