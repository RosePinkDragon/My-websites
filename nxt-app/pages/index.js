import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti molestiae et necessitatibus atque tempora eum, vero officia dicta magnam temporibus mollitia labore quo veritatis adipisci quam assumenda ipsum amet quaerat?</p>
        <p className={styles.text}>Consectetur quasi obcaecati iure nobis accusamus animi. Non, velit vero? Facilis similique doloribus aliquid maiores asperiores mollitia impedit, iusto id qui magnam, dolorum et reprehenderit? Nam dolore dolorum cumque deserunt.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
