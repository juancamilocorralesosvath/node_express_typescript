import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  // hay un problema y es que typescrpit no funcian en runtime
  // solo funciona en tiempo de compilado.
  /*
    cuando enviamos esot, ts no es capaz de detectar que el obtjeitvo tiene la propieda comment.
    TS controla todo lo que sea estatico pero luego cuando
    lo va a ver el cliente lo tenemos que controlar nosotros.
  */
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  // ts lo hace de manera automatica en caso de que sea undefined
  // diary?.id
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error occurred'
    res.status(400).send(message)
  }
})

export default router
