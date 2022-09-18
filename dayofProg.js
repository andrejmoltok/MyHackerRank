function dayOfProgrammer(y) {
    let days = 0;
    
    let dayOfProg = 256;

    let months = {
        "January" : 31,
        "February": 28,
        "March"   : 31,
        "April"   : 30,
        "May"     : 31,
        "June"    : 30,
        "July"    : 31,
        "August"  : 31
    }
    
    if (y > 1918 && (y % 4 == 0 || y % 400 === 0)) {
        months["February"] = 29;
        days = Object.values(months).reduce((p,c) => p+c,0);
        return days;
    }
    
}

console.log(dayOfProgrammer(1984));