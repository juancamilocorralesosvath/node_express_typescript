import { DiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather } from '../types'
import diaryData from './diaries.json'
// import diaryData from './diaries'

// en este caso la asercion de tipos es necesaria
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// con la solucion idilica, pocas veces podemos hacer esto, necesitariamos tener nosotros el json, tambien es mas costoso en runtime
//  const diaries:Array<DiaryEntry> = diaryData

export const getEntries = (): DiaryEntry[] => diaries

export const addDiary = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
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
