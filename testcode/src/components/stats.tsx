type numbersort = (param : number[]) => number | undefined



export const max : numbersort = (param)  => Math.max(...param);

export const min : numbersort = (param) => Math.min(...param); //중괄호 빼면 그냥 리턴 붙는다고 생각하셈

export const avg : numbersort = (param) =>  param.reduce((sum, current, _index, arr) => sum + current / arr.length ,0)


export const median : numbersort = (param) => {
    const { length } = param;
    const middle = Math.floor(length / 2);
    return length % 2
      ? param[middle]
      : (param[middle - 1] + param[middle]) / 2;
    
}

export const mode  = (param : number[]) : {[key : number] : number} | null | number => {
    let setArr = Array.from(new Set(param))
    let obj : {[key : number] : number} = {}
    setArr.forEach((element) =>{ 
        let { length } = param.filter((item)=> item === element);
        obj[element]= length;
    })
    let max = Math.max(...Object.values(obj)); // 최다 값.
    let maxKey = Object.keys(param).filter((item)=> obj[parseInt(item)] === max)
    if(maxKey.length > 1)
        return null;
    else
        return parseInt(maxKey[0]);
};
