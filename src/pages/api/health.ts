import { NextApiRequest, NextApiResponse } from "next";

type HealthResponse = {
    status: "ok"
}

const handler = (req: NextApiRequest, res: NextApiResponse<HealthResponse>) => {
    if (req.method === "GET") {
        return res.status(200).json({ status: 'ok' });
    }
}

export default handler;