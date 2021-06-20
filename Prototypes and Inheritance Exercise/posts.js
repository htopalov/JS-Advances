function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment(value) {
            this.comments.push(value);
        }
        toString() {
            let str = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                str += '\nComments:';
                for (const comment of this.comments) {
                    str += `\n * ${comment}`;
                }
            }
            return str;
        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = Number(views);
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let social = new classes.BlogPost('Test title', 'test content', 1);
social.view();
social.view();
console.log(social.toString());