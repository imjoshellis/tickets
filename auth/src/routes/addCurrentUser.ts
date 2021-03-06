import { currentUser } from '@ije-ticketapp/common'
import { Application } from 'express'

export const addCurrentUserRoute = (app: Application) => {
  app.get('/api/users/currentuser', currentUser, (req, res) => {
    res.status(200).send({ currentUser: req.currentUser || null })
  })
}
