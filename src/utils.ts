import { NewDiaryEntry, Weather } from './types'

const parseComment = (requestComment: any): string => {
  if (!isString(requestComment)) {
    throw new Error('incorrect or missing comment')
  }
  return requestComment
}

const parseDate = (requestDate: any): string => {
  if (!isString(requestDate) || !isDate(requestDate)) {
    throw new Error('incorrect or missing date')
  }
  return requestDate
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isString = (string: unknown): boolean => {
  return typeof string === 'string' || string instanceof String
}

const parseWeather = (requestWeather: any): Weather => {
  if (!isString(requestWeather) || !isWeather(requestWeather)) {
    throw new Error('incorrect or missing weather')
  }
  return requestWeather
}

const isWeather = (string: string): boolean => {

}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date)
    // ...
  }
  return newEntry
}
export default toNewDiaryEntry
