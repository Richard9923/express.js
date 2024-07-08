const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");


async function showPosts() {

    try {
        const res = await fetch('http://localhost:8000/api/posts');
        if (!res.ok) {
            throw new Error ('Failed to fetch posts');
    
        }
        const posts = await res.json();
        output.innerHTML = '';
    
        posts.forEach((post) => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
    
        })
        
    } catch (error) {
        console.log('Error fetching posts: ', error);
    }
   
}

// Event listeners
button.addEventListener('click', showPosts);
