import React from 'react'
import styles from '../../styles/components/helper-components/Notification.module.scss'

function Notification(props) {
  const notificationClasses = `${styles.notification} ${props.className}`
  return (
    <div className={notificationClasses}>
      <p className={styles['notification__content']}>{props.content}</p>
      <button onClick={props.onClick(false)} className={styles['notification__cancel-btn']}>&times;</button>
    </div>
  )
}

export default Notification