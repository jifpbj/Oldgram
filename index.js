const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("container")

function renderAll() {
    posts.forEach((x)=>{
        const {name, username, location, avatar, post, comment, likes} = x;
        const innerHTML = `
                    <section class= "author">
                        <img src="${avatar}" class="author-avatar" alt="">
                        <div class= "author-container">
                            <p class="username"><strong>${name}</strong></p>
                            <p class="location">${location}</p>
                        </div>
                    </section>
                        <div class= "post-div">
                            <img src="${post}" class="post" alt="">
                        </div>
                    <section class= "btn">
                        <img src = "/images/icon-heart.png" class="icon" alt="black line heart">
                        <img src = "/images/icon-comment.png" class="icon" alt="black line comment bubble">
                        <img src = "/images/icon-dm.png" class="icon" alt="black line message button">
                    </section>
                    <section class= "text-content">
                        <p class="likes">${likes} likes</p>
                        <p class="comment"><span class="username comment">${username}</span> ${comment}</p>
                    </section>
                    <div class="gap">
                    </div>
        `
        container.innerHTML += innerHTML
    }
    )
}
 
renderAll()
 