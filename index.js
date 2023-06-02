
class superdate extends Date{

    weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    workdays = [];
    compDate;

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
        if(options.mainDate){
            super(options.mainDate);
        }
        else {
            super();
        }
        if(options.workdays){
            this.setWorkDays(options.workdays);
        }
    }

    setComparisonDate(date){
        this.compDate = new Date(date);
        return true;
    }

    getComparisonDate(){
        return this.compDate;
    }

    getFirstDay(date){
        let newDate;
        if(typeof(date) != 'undefined'){
            newDate = new Date(date);
            return new Date(newDate.getFullYear(), newDate.getMonth(), 1);
        }
        else {
            return new Date(this.getFullYear(), this.getMonth(), 1);
        }
    }

    getLastDay(date){
        let newDate;
        if(typeof(date) != 'undefined'){
            newDate = new Date(date);
            return new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
        }
        else {
            return new Date(this.getFullYear(), this.getMonth() + 1, 0);
        }
    }

    getWeekDay(date){
        let dayIndex;
        if(typeof(date) != 'undefined'){
            dayIndex = date.getDay();
        }
        else {
            dayIndex = this.getDay();
        }
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

    isWorkDay(date){
        let weekday;
        if(typeof(date) != 'undefined'){
            weekday = this.getWeekDay(date);
        }
        else {
            weekday = this.getWeekDay();
        }
        if(this.getWorkDays().includes(weekday)){
            return true;
        }
        else {
            return false;
        }
    }

}

module.exports = superdate;