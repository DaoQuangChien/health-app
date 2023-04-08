import images from '@assets/images'
import { getData, Pagination } from '.'

export const RECOMMENDED_COLUMNS = [
  {
    title: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    description: '健康',
  },
]

export interface Column {
  image: string
  date: string
  description: string
  tags: string[]
}

const COLUMN_DATA = [
  {
    image: images.column1,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column2,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column3,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column4,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column5,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column6,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column7,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column8,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column1,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column2,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column3,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column4,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column5,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column6,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column7,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    image: images.column8,
    date: '2021-05-17T23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
]

const getColumnData = ({ limit, offset, filter }: Pagination<Column>) =>
  getData({ limit, offset, filter, data: COLUMN_DATA })

export default getColumnData
