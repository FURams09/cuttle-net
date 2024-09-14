import { NextApiRequest, NextApiResponse } from "next";

type HomeResponse = {
    data: {
        hello: string
        error?: string
    }
}

type ErrorResponse = {
    data: {
        error: 'goodbye world'
    }
}

const handler = (req: NextApiRequest, res: NextApiResponse<HomeResponse | ErrorResponse>) => {
    if (req.method === "GET") {
        return res.status(200).json({ data: {hello: 'world' }} );
    }
    res.status(402)
    return res.send({ data : { error: 'goodbye world' } });
}

export default handler;