
class dateOptions extends Date{

    weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    workdays = [];

    getLastDay(date){
        // Still to be implemented
    }

    setWorkDays(days){
        let wkd = days;
        if(Array.isArray(wkd)){
            wkd.forEach(el => {
                if(el < 7 && el >= 0){
                    this.workdays.push(el);
                    return true;
                }
                else {
                    throw "Wrong format for workdays";
                }
            });
        }
    }

    constructor(options){
        if(options.date){
            super(options.date);
        }
        else {
            super();
        }
        if(options.workdays){
            this.setWorkDays(options.workdays);
        }
    }

    getWeekDay(){
        let dayIndex = this.getDay();
        if(dayIndex < 7 && dayIndex >= 0){
            return this.weekdays[dayIndex];
        }
        else {
            throw "Wrong day format";
        }
    }

    getWorkDays(){
        if(this.workdays != null){
            let mapa = this.workdays.map(el => {
                return this.weekdays[el];
            });
            return mapa;
        }
        else {
            throw "Workdays are not setted";
        }
    }

    isWorkDay(){
        if(this.getWorkDays().includes(this.getWeekDay())){
            return true;
        }
        else {
            return false;
        }
    }

}