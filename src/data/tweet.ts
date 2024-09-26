import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id:123,
    user: user,
    body: 'I love programming',
    image: 'https://itechnolabs.ca/wp-content/uploads/2022/07/describe-the-mern-stack-itechnolabs.jpg',
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8 ,1 ,10 ,0 ,0)

}