const replaceData = (str) =>{
  return str.replace(/A#/g,'a')
            .replace(/C#/g,'c')
            .replace(/D#/g,'d')
            .replace(/F#/g,'f')
            .replace(/G#/g, 'g');
}
const changeTime = (time) =>{
  const [hour, minute]= time.split(':');
  return parseInt(hour) * 60  + parseInt(minute);
}
function solution(m, musicinfos) {
  const replaceM = replaceData(m);
  const musicResult = musicinfos.map((v,i)=>{
    
      const [start, end, title, info] = v.split(',');
      const startTime = changeTime(start);
      const endTime = changeTime(end);
      const changeInfo = replaceData(info);
      let difference = endTime - startTime;
      if(difference<0){
          difference = 1440-startTime;
      }
      return {
          title,
          musicValue : changeInfo.repeat(difference/changeInfo.length).substring(0, difference)
       }
   }).filter(({title, musicValue})=>
          musicValue.includes(replaceM)
   ).sort((a,b)=>b.musicValue.length - a.musicValue.length) 
   return musicResult.length>0?  musicResult[0].title:'(None)';                     
}
const m = "ABCDEFG";
const musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];
console.log(solution(m, musicinfos));