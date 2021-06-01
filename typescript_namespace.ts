namespace Blog  {
    export interface IPost {
        title: string;
        body: string;
    }
    
    export class Post implements IPost {
        title: string;
        body: string;
        constructor(post: IPost) {
            this.title = post.title;
            this.body = post.body;
        } 
        printPost() {
            console.log(this.title);
            console.log(this.body);
        }
    } 
}

namespace Content  {
    export interface IPost {
        title: string;
        body: string;
    }
    
    export class Post implements IPost {
        title: string;
        body: string;
        constructor(post: IPost) {
            this.title = post.title;
            this.body = post.body;
        } 
        printPost() {
            console.log(this.title);
            console.log(this.body);
        }
    } 
}

const newPost = new Blog.Post({title: 'hello', body: 'post'});
const newContent = new Content.Post({title: 'hello', body: 'body'});
newPost.printPost();
newContent.printPost();


