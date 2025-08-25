export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// la interfaz esta pensada para
// ser extendida
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/*
si hicieramos esto es una mala practica:
export interface NonSensitiveInfoDiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility

}
*/

// estas son dos maneras: pick escogemos las propiedades, omit son todas menos las que indiquemos
// es para evitar estar creando y creando tipos

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
// intentar mover siempre objetos con contrato
// intentar reutilizar
// no crear nuevos contratos para cada parametro
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
