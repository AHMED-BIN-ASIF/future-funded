import React from 'react'
import Banner from '../components/Banner'
import GetPaid from '../components/GetPaid'
import BigAwards from '../components/BigAwards'
import Affiliate from '../components/Affiliate'
import BuildNetwork from '../components/BuildNetwork'
import TopAffiliate from '../components/TopAffiliate'
import WolfBanc from '../components/WolfBanc'

const Home = () => {
  return (
    <div>
    <Banner/>
    <GetPaid/>
    <BigAwards/>
    <Affiliate/>
    <WolfBanc/>
    <TopAffiliate/>
    <BuildNetwork/>
    </div>
  )
}

export default Home