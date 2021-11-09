export const formatDate = (date) =>  {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }


  export const formatTime = (slot) => {
    let { hours, minutes } = slot;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let fullTime = "";

    if (hours < 12) {
      fullTime += hours + ":" + minutes + " AM";
    } else if (hours === 12) {
      fullTime += hours + ":" + minutes + " PM";
    } else {
      fullTime += hours - 12 + ":" + minutes + " PM";
    }
    return fullTime;
  }

 
   export const initialiseDatewiseSltArray = () => {
    let array = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let nextDay = new Date();
      nextDay.setDate(today.getDate() + i);

      array.push({
        // "array" is array of this structure
        date: nextDay,
        slots: { morning: [], afternoon: [], evening: [] },
        show: false,
      });
    }
    return array;
  }