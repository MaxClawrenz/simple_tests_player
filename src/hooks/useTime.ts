export const useTime = (ms: number) =>{
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return {
        minutes,
        seconds: seconds.toString().padStart(2, '0')
    }
}