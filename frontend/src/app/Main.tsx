import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import PostsSection from './posts/PostsSection'
import { Route, Switch } from 'react-router-dom'
import PostsDetailsPage from './post-details/PostsDetailsPage'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}))

export default function Blog() {
    return (
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
}
