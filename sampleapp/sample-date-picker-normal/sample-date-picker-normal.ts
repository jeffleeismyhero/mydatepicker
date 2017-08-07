import {Component, OnInit, ViewChild} from '@angular/core';
import {IMyOptions, IMyDateModel, IMyInputFieldChanged, IMyCalendarViewChanged, IMyInputFocusBlur, IMyMarkedDate} from '../../src/my-date-picker/interfaces';
import {MyDatePicker} from '../../src/my-date-picker/my-date-picker.component';

declare var require:any;
const normalSampleTpl: string = require('./sample-date-picker-normal.html');

@Component({
    selector: 'sample-date-picker-normal',
    template: normalSampleTpl
})

export class SampleDatePickerNormal implements OnInit {

    @ViewChild('mydp') mydp: MyDatePicker;

    private myDatePickerNormalOptions: IMyOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'mmm dd, yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        markCurrentDay: true,
        height: '34px',
        width: '210px',
        alignSelectorRight: false,
        openSelectorTopOfInput: false,
        indicateInvalidDate: true,
        monthSelector: true,
        yearSelector: true,
        minYear: 1900,
        maxYear: 2200,
        componentDisabled: false,
        showClearDateBtn: true,
        showDecreaseDateBtn: false,
        showIncreaseDateBtn: false,
        showSelectorArrow: true,
        showInputField: true,
        openSelectorOnInputClick: false,
        disableHeaderButtons: true,
        showWeekNumbers: false,
        markDates: [],
        markWeekends: <IMyMarkedDate>{},
        monthLabels: {
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December'
        }
    };
    private selectedDateNormal:string = '';

    private selectedTextNormal: string = '';
    private border: string = 'none';

    private placeholder: string = 'Select date';
    private disabled: boolean = false;

    constructor() {}

    clearDate() {
        this.selectedDateNormal = '';
    }

    decreaseDate() {
        this.selectedDateNormal = '';
    }

    increaseDate() {
        this.selectedDateNormal = '';
    }

    onDisableComponent(checked: boolean) {
        this.disabled = checked;
    }

    onEditableDateField(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.editableDateField = checked;
        copy.openSelectorOnInputClick = !checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowTodayButton(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showTodayBtn = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowClearDateButton(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showClearDateBtn = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowDecreaseDateButton(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showDecreaseDateBtn = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowIncreaseDateButton(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showIncreaseDateBtn = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowInputField(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showInputField = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onAlignSelectorRight(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.alignSelectorRight = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onOpenSelectorTopOfInput(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.openSelectorTopOfInput = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowSelectorArrow(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showSelectorArrow = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onDisableHeaderButtons(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.disableHeaderButtons = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowWeekNumbers(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showWeekNumbers = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onMarkToday(checked: boolean): void {
        let d: Date = new Date();
        let copy = this.getCopyOfOptions();
        copy.markDates = checked ? [{dates: [{year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}], color: '#C30000'}] : [];
        this.myDatePickerNormalOptions = copy;
    }

    onMonthSelector(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.monthSelector = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onYearSelector(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.yearSelector = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onMarkWeekends(checked: boolean): void {
        let copy = this.getCopyOfOptions();
        copy.markWeekends = checked ? {marked: true, color: 'blue'} : {marked: false, color: ''};
        this.myDatePickerNormalOptions = copy;
    }

    onMultiSelect(checked: boolean): void {
        let copy = this.getCopyOfOptions();
        copy.multiSelect = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onToggleSelector(event: any) {
        event.stopPropagation();
        this.mydp.openBtnClicked();
    }

    ngOnInit() {
        console.log('onInit(): SampleDatePickerNormal');
    }

    onDateChanged(event: IMyDateModel) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if(event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';

            this.selectedDateNormal = event.formatted;
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    }

    onInputFieldChanged(event: IMyInputFieldChanged) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    }

    onCalendarViewChanged(event: IMyCalendarViewChanged) {
        console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
    }

    onCalendarToggle(event: number): void {
        console.log('onCalendarToggle(): Value: ', event);
    }

    onInputFocusBlur(event: IMyInputFocusBlur): void {
        console.log('onInputFocusBlur(): Reason: ', event. reason, ' - Value: ', event.value);
    }

    getCopyOfOptions(): IMyOptions {
        return JSON.parse(JSON.stringify(this.myDatePickerNormalOptions));
    }
}
