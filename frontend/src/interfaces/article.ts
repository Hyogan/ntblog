export interface Article {
    id : number,
    author : string,
    slug : string,
    title: string,
    description: string,
    url: string,
    urlToImage : string,
    content : string,
    publishedAt : Date,
    reading_time : number
}
