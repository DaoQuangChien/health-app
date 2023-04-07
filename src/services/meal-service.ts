import images from '@assets/images'
import { getData, Pagination } from './index'

export enum MealCat {
  MORNING = 'Morning',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
  SNACK = 'Snack',
}

export interface Meal {
  image: string
  description: string
  category: MealCat.MORNING | MealCat.LUNCH | MealCat.DINNER | MealCat.SNACK
}

const MEALS: Meal[] = [
  {
    image: images.m01,
    description: '05.21.Morning',
    category: MealCat.MORNING,
  },
  {
    image: images.l03,
    description: '05.21.Lunch',
    category: MealCat.LUNCH,
  },
  {
    image: images.d01,
    description: '05.21.Dinner',
    category: MealCat.DINNER,
  },
  {
    image: images.l01,
    description: '05.21.Snack',
    category: MealCat.SNACK,
  },
  {
    image: images.m01,
    description: '05.20.Morning',
    category: MealCat.MORNING,
  },
  {
    image: images.l02,
    description: '05.20.Lunch',
    category: MealCat.LUNCH,
  },
  {
    image: images.d02,
    description: '05.20.Dinner',
    category: MealCat.DINNER,
  },
  {
    image: images.s01,
    description: '05.20.Snack',
    category: MealCat.SNACK,
  },
  {
    image: images.m02,
    description: '05.19.Morning',
    category: MealCat.MORNING,
  },
  {
    image: images.l02,
    description: '05.19.Lunch',
    category: MealCat.LUNCH,
  },
  {
    image: images.d01,
    description: '05.19.Dinner',
    category: MealCat.DINNER,
  },
  {
    image: images.m03,
    description: '05.19.Snack',
    category: MealCat.SNACK,
  },
]

export const FILTER_OPTIONS: { icon: string; title: MealCat }[] = [
  {
    icon: images.iconKnife,
    title: MealCat.MORNING,
  },
  {
    icon: images.iconKnife,
    title: MealCat.LUNCH,
  },
  {
    icon: images.iconKnife,
    title: MealCat.DINNER,
  },
  {
    icon: images.iconCup,
    title: MealCat.SNACK,
  },
]

const getMeals = ({ limit, offset, filter }: Pagination<Meal>) =>
  getData({ limit, offset, filter, data: MEALS })

export default getMeals
