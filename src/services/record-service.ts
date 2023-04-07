import images from '@assets/images'
import { getData, Pagination } from './index'

export enum RecordCat {
  BODY_RECORD = 'BODY RECORD',
  MY_EXERCISE = 'MY EXERCISE',
  MY_DIARY = 'MY DIARY',
}

export interface Diary {
  time: string
  content: string
}

export const RECORD_CATEGORIES = [
  {
    image: images.myRecommend1,
    title: RecordCat.BODY_RECORD,
    description: '自分のカラダの記録',
  },
  {
    image: images.myRecommend2,
    title: RecordCat.MY_EXERCISE,
    description: '自分の運動の記録',
  },
  {
    image: images.myRecommend3,
    title: RecordCat.MY_DIARY,
    description: '自分の日記',
  },
]

export const MY_EXERCISE_DATA = [
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
  {
    name: '家事全般（立位・軽い）',
    duration: '10 min',
    effectiveness: '26kcal',
  },
]

const MY_DIARY_DATA = [
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    time: '2021-05-21T23:25',
    content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
]

const getDiaryData = ({ limit, offset, filter }: Pagination<Diary>) =>
  getData({ limit, offset, filter, data: MY_DIARY_DATA })

export default getDiaryData
