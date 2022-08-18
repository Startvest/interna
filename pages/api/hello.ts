import type { NextApiRequest, NextApiResponse } from 'next';
import getData from '../../server/hello';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json(await getData());
  }
}
