import React from 'react'
import { OleFAQTemplate } from '../../ComponentIndex'
import { oleFAQData } from '../../../data/dataIndex'

const OleFAQPage = () => {
  return (
    <>
    <OleFAQTemplate oleFAQData={oleFAQData} />
    </>
  )
}

export default OleFAQPage