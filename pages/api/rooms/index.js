import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import onError from '../../../middlewares/errors'

import { allRooms, newRoom } from '../../../controllers/roomControllers'

const handler = nc({onError});

dbConnect()

handler.get(allRooms)
handler.post(newRoom)

export default handler