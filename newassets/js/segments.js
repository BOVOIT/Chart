class Segments{

    /** Segment */
    //ACCEPTS DATETIME OBJECT || MOMENT OBJECTS for first 2 arguments and string for 3rd
    constructor(timeFrom, timeTo, type) {
        let errorMessage = [];
        if(!_.isString(type)) {
            errorMessage.push(locale.errors.segments.notString);
        } else if(!verifyType(type)) {
            errorMessage.push(locale.errors.segments.notSegmentType);
        }
        if((_.isDate(timeFrom) && _.isDate(timeTo)) || (moment.isMoment(timeFrom) && moment.isMoment(timeTo))) {
            if(!this.verifyDateRange(timeFrom, timeTo)) {
                errorMessage.push(locale.errors.segments.dateNotSmaller);
            }
        } else {
            errorMessage.push(locale.errors.segments.notDateObjects);
        }
        if(errorMessage.length > 0) {
            throw errorMessage.join('\n');
        }
    }

    verifyType(s) {
        let usedCache = true;
        //if there is not cached types try to collect from server.
        //if()
    }

    verifyDateRange(d1, d2) {
        if(_.isDate(d1)) {
            if(d1.getTime() >= d2.getTime()) {
                return false;
            }
            this.dateFrom = moment(d1);
            this.dateTo = moment(d2);
        } else {
            if(!d1.isBefore(d2)) {
                return false;
            }
        }
        return true;
    }
}