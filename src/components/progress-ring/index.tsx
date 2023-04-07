import { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  radius: number
  stroke?: number
  progress: number
  className?: string
}
const ProgressRing: FC<Props> = ({ radius, stroke = 2, progress, className }) => {
  const normalizedRadius = radius - stroke
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress * circumference) / 100

  return (
    <svg height={radius * 2} width={radius * 2} className={className}>
      <circle
        className={styles.circle}
        stroke='white'
        fill='transparent'
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

export default ProgressRing
