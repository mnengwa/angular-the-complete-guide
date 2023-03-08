import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: `<span>Hooray 🎉</span>`,
    styles: [`span {
        font-size: 24px;
        padding: 8px 16px;
        font-weight: bolder;
        letter-spacing: 0.5px;
        background-color: aquamarine;
    }`]
})
export class SuccessAlertComponent {

}