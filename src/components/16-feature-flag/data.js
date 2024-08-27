


const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true
}

function featureFlagsDataServiceCall() {

    return new Promise((resolve, reject) => {
        if (dummyApiResponse) {
            setTimeout(() => resolve(dummyApiResponse), 500); 
        } else {
            reject('Error occured. Please try again');
        } 
    })
}

export default featureFlagsDataServiceCall;