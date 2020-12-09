import React, { useState } from 'react'
import { useMount } from 'react-use'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Main from './Main'

import { fetchCategories } from 'libs/services/categoryService'

export default function App() {
    const [categories, setCategories] = useState([])

    useMount(async () => {
        const categories = await fetchCategories()

        setCategories(categories)
        console.log('categories', categories)
    })

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" categories={categories} />
                <Main />
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </>
    )
}
