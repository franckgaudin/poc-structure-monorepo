import * as React from 'react'

import cx from 'classnames'

import './avatar.scss'

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

export interface AvatarProps extends React.ComponentProps<'img'> {
  /** The alternate text for the image */
  alt?: string
  /** Add a specific class to the avatar */
  className?: string
  /** Add a data-test tag for automated tests */
  dataTest?: string
  /** Specifies the size of the avatar */
  size?: Size
  /** Specifies the image url to show */
  src: string
}

const Avatar: React.FunctionComponent<AvatarProps> = ({
  alt = 'Avatar',
  className,
  dataTest,
  size = 'medium',
  src,
  ...rest
}) => {
  const classes = cx('ids-avatar', `ids-avatar--${size}`, className)

  return <div className={classes} />
}

export default Avatar
