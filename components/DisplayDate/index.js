import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')
var updateLocale = require('dayjs/plugin/updateLocale')

export default function DisplayDate({ date, show }) {
  dayjs.extend(relativeTime)
  dayjs.extend(updateLocale)


  dayjs.updateLocale('en', {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: '2s',
      m: "1m",
      mm: "%dm",
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
  
  const dayObj = dayjs(date);
  const dateString = dayObj.format(`MMM DD, YYYY`);
  const timeString = dayObj.format(`h:mm A`);
  const awayString = dayObj.fromNow(true);

  return (
    <>
      {show.includes("date") && <>{dateString}</>} {show.includes("time") && <>{timeString}</>} {show.includes("ago") && <>{awayString}</>}
    </>
  );
}