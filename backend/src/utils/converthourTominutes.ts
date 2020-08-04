export default function convertHourToMinute(time:string){
    const [hour, minutes] = time.split(':').map(Number);
    const timeInminute = (hour * 60) + minutes;

    return timeInminute;
}