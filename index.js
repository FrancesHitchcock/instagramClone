const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        alt: "Self-portrait of Vincent van Gogh frowning.",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        alt: "Self-portrait of Gustave Courbet with wide staring eyes, running his hands through his hair.",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        alt: "Self-portrait of Joseph Ducreux wearing both a smile and a frown, pointing at the viewer. ",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main");

function renderMain() {
    let innerHtml = ``;

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        innerHtml += `
            <section class="user-profile">
                <div class="user-info">
                    <img class="avatar" src="${post.avatar}" alt="${post.name} avatar">
                    <div class="user-name-wrapper">
                        <h2 class="name">${post.name}</h2>
                        <p class="location">${post.location}</p>
                    </div>
                </div>
                <img class="user-img" src="${post.post}" alt="${post.alt}">
                <div class="profile-section">
                    <div class="icon-container">
                        <img data-postindex="${i}" class="icon" src="images/icon-heart.png" alt="likes icon.">
                        <img class="icon" src="images/icon-comment.png" alt="comment icon.">
                        <img class="icon" src="images/icon-dm.png" alt="direct message icon.">
                    </div>
                    <p class="like-count"><span class="bold-text" data-likesindex="${i}">${post.likes} likes</span></p>
                    <p class="username-caption"><span class="bold-text">${post.username}</span> ${post.comment}</p>
                </div>
            </section>
        `
    }
    
    main.innerHTML = innerHtml;
}

function renderLikes(e) {
    const index = Number(e.target.dataset.postindex);
    posts[index].likes += 1;

    const targetElement = document.querySelector(`[data-likesindex="${index}"]`);
    
    targetElement.textContent = `${posts[index].likes} likes`
}

document.addEventListener("dblclick", renderLikes)

renderMain();
