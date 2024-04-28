const subjects = [
  "The cat", "The dog", "The bird", "The sun", "The moon", 
  "The tree", "The flower", "The river", "The mountain", "The ocean", 
  "The car", "The bicycle", "The plane", "The train", "The boat", 
  "The house", "The building", "The city", "The country", "The world", 
  "The child", "The parent", "The student", "The teacher", "The doctor", 
  "The scientist", "The artist", "The musician", "The actor", "The writer", 
  "The computer", "The phone", "The camera", "The book", "The movie", 
  "The song", "The dance", "The game", "The sport", "The hobby", 
  "The food", "The drink", "The restaurant", "The cafe", "The market", 
  "The park", "The garden", "The beach", "The forest", "The desert", 
  "The island", "The continent", "The planet", "The universe", "The galaxy", 
  "The time", "The space", "The dream", "The idea", "The goal", 
  "The plan", "The strategy", "The success", "The failure", "The challenge", 
  "The opportunity", "The adventure", "The journey", "The discovery", "The invention", 
  "The innovation", "The solution", "The problem", "The question", "The answer", 
  "The mystery", "The secret", "The emotion", "The feeling", "The thought", 
  "The memory", "The experience", "The moment", "The event", "The celebration", 
  "The tradition", "The culture", "The history", "The future", "The present", 
  "The past", "The change", "The transformation", "The revolution", "The evolution"
];

const helpingVerbs = [
  "is", "am", "are", "was", "were", "be", "being", "been", 
  "has", "have", "had", "do", "does", "did", "can", "could", 
  "will", "would", "shall", "should", "may", "might", "must"
];

const verbs = [
  "running", "jumping", "singing", "dancing", "playing",
  "reading", "writing", "talking", "listening", "watching",
  "seeing", "looking", "smelling", "tasting", "touching",
  "feeling", "thinking", "believing", "knowing", "understanding",
  "learning", "teaching", "creating", "destroying", "building",
  "making", "eating", "drinking", "sleeping", "waking",
  "working", "resting", "relaxing", "traveling", "exploring",
  "discovering", "solving", "thinking", "imagining", "dreaming",
  "wishing", "hoping", "loving", "liking", "hating",
  "enjoying", "appreciating", "fearing", "desiring", "expecting",
  "needing", "wanting", "preferring", "missing", "forgetting",
  "remembering", "regretting", "forgiving", "accepting", "denying",
  "ignoring", "avoiding", "achieving", "failing", "succeeding",
  "winning", "losing", "fighting", "arguing", "discussing",
  "agreeing", "disagreeing", "competing", "cooperating", "helping",
  "supporting", "encouraging", "inspiring", "motivating", "challenging",
  "adapting", "changing", "improving", "developing", "growing",
  "evolving", "transforming", "surviving", "thriving", "struggling"
];

const prepositions = [
  "about", "above", "across", "after", "against", 
  "along", "among", "around", "at", "before", 
  "behind", "below", "beneath", "beside", "between", 
  "beyond", "by", "down", "during", "except", 
  "for", "from", "in", "inside", "into", 
  "like", "near", "of", "off", "on", 
  "onto", "out", "outside", "over", "past", 
  "since", "through", "throughout", "to", "toward", 
  "under", "underneath", "until", "up", "upon", 
  "with", "within", "without"
];

const objects = [
  "the park", "the beach", "the mountain", "the forest", "the river", 
  "the ocean", "the sky", "the cloud", "the rain", "the snow", 
  "the wind", "the sun", "the moon", "the star", "the planet", 
  "the universe", "the galaxy", "the tree", "the flower", "the grass", 
  "the rock", "the sand", "the soil", "the air", "the water", 
  "the fire", "the ice", "the volcano", "the earthquake", "the tsunami", 
  "the hurricane", "the tornado", "the storm", "the lightning", "the thunder", 
  "the rainbow", "the sunset", "the sunrise", "the morning", "the afternoon", 
  "the evening", "the night", "the day", "the week", "the month", 
  "the year", "the decade", "the century", "the millennium", "the past", 
  "the present", "the future", "the beginning", "the end", "the origin", 
  "the destination", "the goal", "the dream", "the idea", "the plan", 
  "the strategy", "the success", "the failure", "the challenge", "the opportunity", 
  "the adventure", "the journey", "the discovery", "the invention", "the innovation", 
  "the solution", "the problem", "the question", "the answer", "the mystery", 
  "the secret", "the emotion", "the feeling", "the thought", "the memory", 
  "the experience", "the moment", "the event", "the celebration", "the tradition", 
  "the culture", "the history", "the change", "the transformation", "the revolution", 
  "the evolution", "the impact", "the consequence", "the result", "the effect", 
  "the cause", "the reason", "the purpose", "the meaning", "the significance"
];

const nameList = [
  "Rohan Singh", "Neha Patel", "Vikram Sharma", "Priya Desai", "Rahul Gupta",
  "Sneha Reddy", "Karan Kumar", "Pooja Choudhury", "Riya Banerjee", "Aman Mehta",
  "Ishaan Shah", "Tanvi Iyer", "Virat Verma", "Anjali Jain", "Yash Mishra",
  "Divya Rao", "Arjun Das", "Swati Malhotra", "Kabir Sengupta", "Nisha Khanna",
  "Vivek Singh", "Shivani Agarwal", "Rajesh Das", "Sakshi Sharma", "Gaurav Ghosh",
  "Jiya Tiwari", "Amit Singhania", "Nehal Gupta", "Ritu Dubey", "Shubham Joshi",
  "Simran Nair", "Deepak Bhatia", "Ritika Mehra", "Kunal Doshi", "Aishwarya Iyer",
  "Aditi Malhotra", "Vikas Patel", "Shreya Singh", "Vijay Roy", "Megha Agrawal",
  "Raghav Kapoor", "Anushka Singh", "Aakash Verma", "Muskaan Nair", "Ashish Kapoor",
  "Kavita Singh", "Aniket Khatri", "Pallavi Chauhan", "Saurabh Iyer", "Sarika Srivastava",
  "Rohit Sood", "Aarti Sinha", "Akash Sharma", "Neha Agarwal", "Vikrant Kumar",
  "Ananya Kapoor", "Arun Kumar", "Nikita Shah", "Gopal Desai", "Ruchi Joshi",
  "Ravi Malhotra", "Shikha Kapoor", "Rahul Shah", "Kritika Desai", "Sanjay Gupta",
  "Preeti Sharma", "Deepak Iyer", "Shivangi Gupta", "Manoj Verma", "Naina Patel",
  "Rohini Mehta", "Rajat Sharma", "Aaradhya Singh", "Sudhir Malhotra", "Ananya Kumar",
  "Aditya Nair", "Anjali Shukla", "Vinayak Gupta", "Anu Malhotra", "Rajeev Singh",
  "Shruti Iyer", "Gauri Khanna", "Rahul Verma", "Nisha Agnihotri", "Rajat Reddy",
  "Suman Sharma", "Ankit Patel", "Prachi Sharma", "Vishal Malhotra", "Vidya Singh",
  "Rohan Gupta", "Ishita Nair", "Vivek Kapoor", "Kavita Malhotra", "Kartik Sharma"
];




export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function makeRandomMessage() {
    let result = '';
    
      result += subjects[Math.floor(Math.random() * subjects.length)] + " " + helpingVerbs[Math.floor(Math.random() * helpingVerbs.length)] + " "  + verbs[Math.floor(Math.random() * verbs.length)] + " " + prepositions[Math.floor(Math.random() * prepositions.length)] + " " + objects[Math.floor(Math.random() * objects.length)] + "";

    return result;
}

// export function generateRandomComments(length){
//   let comment = {
//     name: "User",
//     text: "This is a comment",
//     replies: []
//   };
  
//   let newComment = comment;
//   newComment.name = nameList[Math.floor(Math.random() * nameList.length)]
//   newComment.text = makeRandomMessage();
//   let repliesLength = Math.random() * length;
//   for(let i = 0; i< repliesLength; i++){
//     newComment.replies.push(generateRandomComments());
//   };
//   return newComment;
// }

export function generateRandomComments(length) {
  const name = nameList[Math.floor(Math.random() * nameList.length)]; // Random name

  // Base comment template
  const baseComment = {
    name: name,
    text: makeRandomMessage(),
    replies: []
  };

  // Array to store comment objects
  const comments = [baseComment];

  for (let i = 0; i < length; i++) {
    const comment = comments[i];
    const repliesLength = Math.floor(Math.random() * length);

    for (let j = 0; j < repliesLength; j++) {
      const newComment = {
        name: nameList[Math.floor(Math.random() * nameList.length)], // Random name
        text: makeRandomMessage(), // Random message
        replies: []
      };

      comment.replies.push(newComment);
      comments.push(newComment);
    }
  }

  return comments;
}