/* relativeDates main */

// Base function.
var relativeDates =
  {
    friendlyString: function(date1, date2) {
      // Array with the amount of days in each month
      var daysInMonth = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      
      //Variables tha will hold the result
      var years, months, days;
      
      // amount in days to add in case the day from date1 is greater date2
      var increment = 0;
      
      if (date1.getDate() > date2.getDate()){
        increment = daysInMonth[date1.getMonth() - 1];
      }
      
      // Its frebruary
      if (increment == -1){
        var isLeap = new Date(date1.getFullYear(), 1, 29).getMonth() == 1;
        if (isLeap){
          increment = 29;
        }
        else {
          increment = 28;
        }
      }
      
      if (increment !== 0){
        days = (date2.getDate() + increment) - date1.getDate();
        increment = 1;
      }
      else {
        days = date2.getDate() - date1.getDate();
      }
      
      if ((date1.getMonth() + increment) > date2.getMonth()){
        months = (date2.getMonth() + 12) - (date1.getMonth() + increment);
        increment = 1;
      }
      else {
        months = date2.getMonth() - (date1.getMonth() + increment);
        increment = 0;
      }
      
      years = date2.getFullYear() - (date1.getFullYear() + increment);
      
      var displayString = "";
      
      if (years == 1){
        displayString += "1 Year";
      }
      else if (years > 1){
        displayString += years + " Years";
      }
      
      if (months > 0){
        if (years > 0) {
          displayString += ", ";
        }
        if (months == 1){
          displayString += "1 Month";
        }
        else
        {
          displayString += months + " Months";
        }
      }
      
      if (days > 0){
        if (months > 0 || years > 0){
          displayString += ", ";
        }
        if (days == 1){
          displayString += "1 Day";
        }
        else {
          displayString += days + " Days";
        }
      }
      return displayString;
    },
    xmlString: function(date1, date2) {
       // Array with the amount of days in each month
      var daysInMonth = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      
      //Variables tha will hold the result
      var years, months, days;
      
      // amount in days to add in case the day from date1 is greater date2
      var increment = 0;
      
      if (date1.getDate() > date2.getDate()){
        increment = daysInMonth[date1.getMonth() - 1];
      }
      
      // Its frebruary
      if (increment == -1){
        var isLeap = new Date(date1.getFullYear(), 1, 29).getMonth() == 1;
        if (isLeap){
          increment = 29;
        }
        else {
          increment = 28;
        }
      }
      
      if (increment !== 0){
        days = (date2.getDate() + increment) - date1.getDate();
        increment = 1;
      }
      else {
        days = date2.getDate() - date1.getDate();
      }
      
      if ((date1.getMonth() + increment) > date2.getMonth()){
        months = (date2.getMonth() + 12) - (date1.getMonth() + increment);
        increment = 1;
      }
      else {
        months = date2.getMonth() - (date1.getMonth() + increment);
        increment = 0;
      }
      
      years = date2.getFullYear() - (date1.getFullYear() + increment);
      
      return years+"y"+months+"M"+days+"D";
    }
  };


// Version.
relativeDates.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
root.relativeDates = relativeDates;
