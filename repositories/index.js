import { MongoClient } from 'mongodb';
export const db = {
    user: null,
    post: null,
    tag: null,
};

export const initDatabase = () => {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    client.connect().then(() => {
        console.log("db connected");
        const connected = client.db("Blog");
        db.user = connected.collection("user");
        db.post = connected.collection("post");
        db.tag = connected.collection("tag");
    })
}
