export const LIMIT = 8

export interface Pagination<T> {
  limit?: number
  offset: number
  filter?: (item: T) => boolean
}

interface Request<T> extends Pagination<T> {
  data: T[]
}

interface Response<T> {
  data: T[]
  hasMore: boolean
}

export const getData = <T>({ limit = LIMIT, offset, filter, data }: Request<T>): Response<T> => {
  const filteredData = filter ? data.filter(filter) : data
  const start = offset * limit
  const end = start + limit

  return {
    data: filteredData.slice(start, end),
    hasMore: filteredData.length > end,
  }
}

export { default as getMeals } from './meal-service'
export { default as getDiaryData } from './record-service'
