import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  commits: number;
};

const ghAccounts: { readonly [usename: string]: number } = {
  mrousavy: 1,
};

async function getNumOfCommits() {
  try {
    //
  } catch (e) {
    console.error(e);
    return 0;
  }
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    commits: 0,
  });
}
