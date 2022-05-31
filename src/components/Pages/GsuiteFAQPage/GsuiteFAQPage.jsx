import React from 'react'
import { GsuiteFAQTemplate } from '../../ComponentIndex'
import { gsuiteFAQsData } from '../../../data/dataIndex'

const GsuiteFAQPage = () => {
  return (
    <> <GsuiteFAQTemplate gsuiteFAQsData={gsuiteFAQsData} /> </>
  )
}

export default GsuiteFAQPage