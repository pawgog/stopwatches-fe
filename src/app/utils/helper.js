export const convertMilliseconds = (duration) => {

    let milliseconds = parseInt((duration % 1000));
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ?`0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    milliseconds = (milliseconds < 10) ? `00${milliseconds}` : milliseconds;
    milliseconds = (milliseconds < 100 && milliseconds >= 10) ? `0${milliseconds}` : milliseconds;

     return `${hours}:${minutes}:${seconds},${milliseconds}`;
}

export const calculateAllTime = (toggles) => {
    let sumTogglesTime = 0;

    for (let i = 1; i < toggles.length; i+=2) {
        sumTogglesTime += toggles[i] - toggles[i - 1]
    }

    return toggles.length !== 0 ? sumTogglesTime : 0;
}

const calculateLapTime = (toggles, laps, index) => {
    let calulateTime = 0
    const togglesLength = toggles.length;

    if (togglesLength < 2) {
        if (toggles[0] < laps[index]) {
            return calulateTime += laps[index] - toggles[0]
        }
    } else {
        for (let i = 1; i < togglesLength; i+=2) {
            if (toggles[i] < laps[index]) {
                calulateTime += toggles[i] - toggles[i - 1]
            } else {
                return calulateTime += laps[index] - toggles[i - 1]
            }
            if (i === togglesLength - 2) {
                return calulateTime += laps[index] - toggles[i + 1]
            }
        }        
    }

    return calulateTime;
}

export const calculateLap = (toggles, laps, index) => {
    let sumLapsTimePrevious = 0;
    let sumLapsTime = 0;

    if (laps.length > 0) {
        sumLapsTimePrevious = calculateLapTime(toggles, laps, index - 1);
        sumLapsTime = calculateLapTime(toggles, laps, index);
    } else {
        sumLapsTime = calculateLapTime(toggles, laps, index);
    }

    return index !== 0 ? sumLapsTime - sumLapsTimePrevious : sumLapsTime;
}