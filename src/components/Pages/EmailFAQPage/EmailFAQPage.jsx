import React from 'react'
import { EmailFAQTemplate } from '../../ComponentIndex'
import { eFAQData } from '../../../data/dataIndex'

const EmailFAQPage = () => {
  return (
    <> <EmailFAQTemplate eFAQData={eFAQData} /></>
  )
}

export default EmailFAQPage