import SuccessPFSolution from '@/components/PortfolioComponent/SuccessSolution'
import Footer from '@/components/portfolioFooter'
import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'
import React from 'react'

const page = () => {
  return (
   <div>
        <PrivacyPolicy />
        {/* <SuccessPFSolution /> */}
        <Footer />
   </div>
  )
}

export default page