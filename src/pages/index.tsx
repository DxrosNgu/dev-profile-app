import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import ProductCategories from '../modules/views/ProductCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
    <AppAppBar />
    <ProductHero />
    <ProductValues />
    <ProductCategories />
    <ProductHowItWorks />
    <ProductCTA />
    <ProductSmokingHero />
    <AppFooter />
  </React.Fragment>
  )
}
