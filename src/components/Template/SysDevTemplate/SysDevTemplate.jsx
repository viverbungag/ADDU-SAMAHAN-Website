import React from 'react'
import styles from './SysDevTemplate.module.scss'

import { Developers, Footer, InitiativeHeader, Navigation } from '../../ComponentIndex' 

const SysDevTemplate = ({ developers }) => {
  return (
    <>
    <Navigation />
    <section className={styles["SysDevTemplate"]}>
      <InitiativeHeader subTitle="SAMAHAN" mainTitle="System Development Team" />
      <Developers developers={developers} />
    </section>
    <Footer />
    </>
  )
}

export default SysDevTemplate