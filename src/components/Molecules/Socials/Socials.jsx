import React from 'react'

import styles from "./Socials.module.scss"
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-mdi/instagram';
import facebookIcon from '@iconify/icons-mdi/facebook';
import twitterIcon from '@iconify/icons-mdi/twitter';

const Socials = () => {
  return (
    <>
      <div className={styles["socials"]}>
        <a href='https://www.instagram.com/samahan_ateneo/' target="_blank" rel="noopener noreferrer"><Icon icon={instagramIcon} color="white" height="28" /></a>
        <a href='https://www.facebook.com/AdDUSAMAHAN/' target="_blank" rel="noopener noreferrer"><Icon icon={facebookIcon} color="white" height="28" /></a>
        <a href='https://twitter.com/addusamahan/' target="_blank" rel="noopener noreferrer"><Icon icon={twitterIcon} color="white" height="28" /></a>
      </div>
    </>
  )
}

export default Socials