// Write your code here!

//Function to display posts
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    //Clear existing posts
    postList.innerHTML = " ",

    //loop through posts
    posts.forEach(post => {
        const li = document.createElement("li");
        const title = document.createElement("h1");
        const body = document.createElement("p");

        //add content
        title.textContent = post.title;
        body.textContent = post.body;

        //append elements
        li.appendChild(title);
        li.appendChild(body);
        postList.appendChild(li);
    });
}

//function to fetch posts
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        //get random posts
        const randomPosts = getRandomPosts(data, 5);

        //display posts
        displayPosts(randomPosts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
    
}

//function to get random posts
function getRandomPosts(posts, number) {
    const shuffled = posts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
}

//call funtion
fetchPosts();