import { NowRequest, NowResponse } from "@vercel/node";

const users = [{
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    age: 27
},
{
    id: 2,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    age: 23
}];

export default (req: NowRequest, res: NowResponse) => {
	const { id } = req.query;
	res.status(200).json({ user: users[Number(id)] });
};
