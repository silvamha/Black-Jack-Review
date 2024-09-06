let myPoints = 3;

export function addPoints(pointsToAdd){
        myPoints += pointsToAdd
    console.log(`Update myPoints to ${myPoints}`)
    return myPoints
} 


export function removePoints(pointsToRemove){
    myPoints -= pointsToRemove
    console.log(`Update myPoints to ${myPoints}`)
    return myPoints
}




export default myPoints;