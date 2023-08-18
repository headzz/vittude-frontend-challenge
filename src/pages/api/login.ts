import { NextApiRequest, NextApiResponse } from 'next'
import { users } from './data'

type Data = {
  name?: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email, password } = JSON.parse(req.body)

  const hasUser = users.find(
    (user) => user.email === email && user.password === password,
  )

  if (hasUser) {
    res.setHeader(
      'Set-Cookie',
      `username:${
        hasUser.name
      }; authenticated=true; HttpOnly; Path=/; Max-Age=${60 * 60 * 24}`,
    )
    return res
      .status(200)
      .json({ message: 'Login successful', name: hasUser.name })
  } else {
    return res.status(404).json({ message: 'Invalid username or password' })
  }
}
