import styles from '../../styles/main.module.css';
import Link from 'next/link';
function Main(){
  return (

    <>

    <div className={styles.eventMain}>
       <p className={styles.subscription}>Your subscription</p>
       <p className={styles.yourevents}><strong>Find Your Events</strong></p>
       <div className={styles.container_event}>
        <li className={styles.event_link_out}>
        <Link href="./ongoing">
        <a className={styles.event_link}>Ongoing</a>
        </Link></li>
        <li className={styles.event_link_out}>
        <Link href="/history">
        <a className={styles.event_link}>History</a>
        </Link></li>
       </div>

    </div>
    </>
  )
}
export default Main
