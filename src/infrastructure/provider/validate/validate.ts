
function checkNumberEmpty(e: number): boolean {
    return e === undefined || e === null || Number.isNaN(e)
}

function checkStringEmpty(e: string): boolean {
    return e === undefined || e === null || e.trim() === ''
}

function checkLengthPassword(e: string):boolean{
    if(e.length < 6){
        return true
    }
    return false;
}

function checkEmpty<T>(e: T): boolean {
    if (typeof e === 'number') {
        return e === undefined || e === null || Number.isNaN(e);
    } else if (typeof e === 'string') {
        return e === undefined || e === null || e.trim() === '';
    } else {
        return e === undefined || e === null;
    }
}

export { checkEmpty };


export {
    checkNumberEmpty,
    checkStringEmpty, 
    checkLengthPassword
};
