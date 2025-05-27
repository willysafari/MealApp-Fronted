import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchForm from '../components/SearchForm'

export default function Mainlayout({ children }) {
  return (
    <div>
      <Header />
      <SearchForm />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}