import { getPosts, getUserById } from './request.js';

const ulNode = document.querySelector('ul');

const responsePosts = getPosts();

responsePosts.then((posts) => {
    const userIds = new Set(posts.map((item) => item.userId))
    buildList(posts)
    buildUser(userIds);
})

function buildList(posts)
{
    var element;
    posts.forEach((post) => {
        element = document.createElement('li');
        element.className = 'list-' + post.userId
        element.textContent = post.title
        ulNode.append(element)
    })
}

function buildUser(ids)
{
    ids.forEach(id => {
        const responseUser = getUserById(id);
        responseUser.then((user) => {
            document.querySelectorAll(`.list-${user.id}`).forEach((item) => {
                const element = document.createElement('span');
                element.className = 'red'
                element.textContent = user.name
                item.append(element)
            })
        })
    })
}
