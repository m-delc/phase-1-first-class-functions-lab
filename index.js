// const returnFirstTwoDrivers = () => {
//     return drivers[0,1]
// } 

// const returnFirstTwoDrivers = function () {
//     // return drivers[0,1]
// }


// const returnFirstTwoDrivers = function () {
//     const drivers ['dr1', 'dr2', 'dr3', 'dr4']
//     return drivers[0,1]
// }




// why???????

// const returnFirstTwoDrivers = () => {
//     const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
//     return drivers[0,1]
// }



// why??????????????????????

// const returnFirstTwoDrivers = () => {
//     const drivers = () => {['Sally', 'Bob', 'Freddy', 'Claudia'];}
//     return drivers[0,1]
// }





// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
// const returnFirstTwoDrivers = () => {
//     let firstTwo = drivers.slice(0,2)
//     return firstTwo
// }





// this works

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [];

selectingDrivers[0] = returnFirstTwoDrivers
selectingDrivers[1] = returnLastTwoDrivers




function fareDoubler(fare) {
    const newFare = fare * 2;
    return newFare;
}

function fareTripler(fare) {
    const newFare = fare * 3;
    return newFare
}

function createFareMultiplier(multiplier) {
    if (multiplier === 2) {
        return function fareDoubler(fare) {
            const newFare = fare * 2;
            return newFare;
        }
    }
    if (multiplier === 5) {
        return function fareQuintupler(fare) {
            return fare * 5;
        }
    }
}



function selectDifferentDrivers(drivers, activity) {
    if (activity === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    if (activity === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}

