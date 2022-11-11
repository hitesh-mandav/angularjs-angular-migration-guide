import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from "@angular/core";

import { Spinner } from 'spin.js';

@Component({
    selector: 'cc-spinner',
    templateUrl: 'app/angular/components/spinner/spinner.component.html'
})
export class SpinnerComponent implements AfterViewInit {
    @Input()
    public isLoading: boolean = false;

    @Input()
    public message: string = 'Loading...';

    @ViewChild('spinnerEl')
    private spinnerEl!: ElementRef;

    ngAfterViewInit(): void {
        new Spinner({radius:8, width:5, length: 3, lines:9})
            .spin(this.spinnerEl.nativeElement);
    }
}