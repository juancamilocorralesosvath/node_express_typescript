import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'
// import diaryData from './diaries'

// en este caso la asercion de tipos es necesaria
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// con la solucion idilica, pocas veces podemos hacer esto, necesitariamos tener nosotros el json, tambien es mas costoso en runtime
//  const diaries:Array<DiaryEntry> = diaryData

export const getEntries = (): DiaryEntry[] => diaries

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}
