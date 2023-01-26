import Image from 'next/image'
import React from 'react'
import styles from './avatar.module.scss'

const Avatar = ({imgUrl, className}) => {
  return (
    <div className={`${styles.avatar} ${className} ` }>
        {
            imgUrl ? <Image src={imgUrl} width={20} height={20}/>:
            <span>EM</span>
        }
    </div>
  )
}

export default Avatar