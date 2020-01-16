import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";

import PostCard from '../../components/PostCard';
import { AuthContext } from "../../context/auth";
import PostForm from "../PostForm";
import { FETCH_POSTS_QUERY } from "../../util/graphql";


function Home(){
  const {user} = useContext(AuthContext);
    let posts;
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    if(data) {
        posts = {data: data.getPosts}
    }
  return (
    <Grid columns={3}>
    <Grid.Row>
        <h1>Recent Posts</h1>
    </Grid.Row>
    <Grid.Row>
    {user && (
      <Grid.Column>
        <PostForm />
      </Grid.Column>
    )}
      {loading ? <h1>Loading...</h1>: (
          posts.data && posts.data.map(post => (
              <Grid.Column key={post.id} style={{marginBottom: '20px'}}>
                <PostCard post={post} />
              </Grid.Column>
          ))
      )}
    </Grid.Row>
    </Grid>
  );
};



export default Home;
