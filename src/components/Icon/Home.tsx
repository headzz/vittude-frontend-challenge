import { HomeIconProp } from './interface'

export const HomeIcon: React.FC<HomeIconProp> = ({ fill = 'white' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="graphics-symbol"
    >
      <g id="Social/public" clipPath="url(#clip0_1_208)">
        <path
          id="Vector"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8.99 15V16C8.99 17.1 9.89 18 10.99 18V19.93C7.06 19.43 4 16.07 4 12ZM17.89 17.4C17.63 16.59 16.89 16 15.99 16H14.99V13C14.99 12.45 14.54 12 13.99 12H7.99V10H9.99C10.54 10 10.99 9.55 10.99 9V7H12.99C14.09 7 14.99 6.1 14.99 5V4.59C17.92 5.77 20 8.65 20 12C20 14.08 19.19 15.98 17.89 17.4Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_208">
          <rect width="24" height="24" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  )
}