import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PostsSection from './posts/PostsSection'
import PostsDetailsPage from './post-details/PostsDetailsPage'

const Main = () => (
    <main>
        <Switch>
            <Route path="/posts/:postId">
                <PostsDetailsPage />
            </Route>
            <Route path="/">
                <PostsSection />
            </Route>
        </Switch>
    </main>
)

export default Main
