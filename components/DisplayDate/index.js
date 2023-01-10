import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')
var updateLocale = require('dayjs/plugin/updateLocale')
var localizedFormat = require('dayjs/plugin/localizedFormat');
var calendar = require('dayjs/plugin/calendar')
import {useInterval} from '../../hooks/useInterval';

export default function DisplayDate({ date, show }) {

  dayjs.extend(relativeTime)
  dayjs.extend(updateLocale)
  dayjs.extend(localizedFormat)
  dayjs.extend(calendar)

  dayjs.updateLocale('en', {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: '2s',
      m: "1m",
      mm: "%dm ago",
      h: "1h",
      hh: "%dh",
      d: "1d",
      dd: "%dd",
      M: "1M",
      MM: "%d M",
      y: "1Y",
      yy: "%d Y"
    }
  })

  dayjs().calendar(null, {
    sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
    nextDay: '[Tomorrow]', // The next day ( Tomorrow at 2:30 AM )
    nextWeek: 'dddd', // The next week ( Sunday at 2:30 AM )
    lastDay: '[Yesterday]', // The day before ( Yesterday at 2:30 AM )
    lastWeek: '[Last] dddd', // Last week ( Last Monday at 2:30 AM )
    sameElse: 'DD/MM/YYYY' // Everything else ( 7/10/2011 )
  })
  
  const dayObj = dayjs(date);
  const dateString = dayObj.format(`MMM DD, YYYY`);
  const dayString = dayObj.format(`dddd`)
  const timeString = dayObj.format(`h:mm A`);
  const awayString = dayObj.fromNow(true);
  const calenderString = dayjs().calendar(dayObj);

  return (
    <>
      {show.includes("calender") && <>{calenderString}</>} {show.includes("day") && <>{dayString}</>} {show.includes("date") && <>{dateString}</>} {show.includes("ago") && <>{awayString}</>} {show.includes("time") && <>{timeString}</>} 
    </>
  );
}