import { NowRequest, NowResponse } from "@vercel/node";

const users = [{
    id: 0,
    name: "John Doe",
    email: "johndoe@gmail.com",
    age: 27,
    body: "Hello World",
    image: "https://avatars0.githubusercontent.com/u/24394905?s=460&u=e8d9c8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4"
},
{
    id: 1,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    age: 23,
    body: "Hello World",
    image: "https://avatars0.githubusercontent.com/u/24394905?s=460&u=e8d9c8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4"
}];

export default (req: NowRequest, res: NowResponse) => {
	const { id } = req.query;
	res.status(200).json({ user: users[Number(id)] });
};


