// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../helpers/initDB"

import Product from "../../modals/Product";

initDB()

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default function handler(req, res) {
  Product.find().then(product => {
    res.status(200).json(product)
  })
}
