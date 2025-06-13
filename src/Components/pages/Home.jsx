import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import TopTrends from '../TopTrends/TopTrends'
import NewArrivals from '../NewArrivals/NewArrivals'
import OnlinePurchase from '../OnlinePurchase/OnlinePurchase'
import Brands from '../Brands/Brands'
import ProductDetail from '../ProductDetail/ProductDetail'
import Fashion from '../Fashion/Fashion'
import CardSlider from '../CardSlider/CardSlider'
import FollowRivon from '../FollowRivon/FollowRivon'


function Home() {
  return (
    <div>
        <Hero />
        <Features />
        <FeaturedProducts />
        <TopTrends />
        <NewArrivals />
        <OnlinePurchase />
        <Brands />
        <ProductDetail />
        <Fashion />
        <CardSlider />
        <FollowRivon />
    </div>
  )
}

export default Home