var friend=["rahim","abdul","farhan","heroalam"];

if(friend[0].length> friend[1].length && friend[0].length> friend[2].length && friend[0].length> friend[3].length){
    console.log(friend[0]);
}else if(friend[1].length> friend[2].length && friend[1].length> friend[3].length){
    console.log(friend[1]);
}else if(friend[2].length> friend[3].length){
    console.log(friend[2]);
}else{
    console.log(friend[]);
}

// // List of friends' names
// const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];

// // Initialize variables to store the longest name and its length
// let longestName = "";
// let longestNameLength = 0;

// // Iterate through the list of friends
// for (const friend of friends) {
//   if (friend.length > longestNameLength) {
//     // Update the longest name and its length
//     longestName = friend;
//     longestNameLength = friend.length;
//   }
// }

// console.log("Friend with the longest name:", longestName);
