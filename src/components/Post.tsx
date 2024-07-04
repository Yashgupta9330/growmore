import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';
import axios from 'axios';
import { PostType } from '../types/Post';  // Ensure the path to Post.ts is correct

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, editable: true },
    { field: 'userId', headerName: 'User ID', width: 150, editable: true },
    { field: 'title', headerName: 'Title', width: 300, editable: true },
    { field: 'body', headerName: 'Body', width: 600, editable: true },
  ];

  const styles = {
    container: {
      width: '100%',
      minHeight: '80%',
    },
    heading: {
      color: 'Black'
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.heading}>
        Posts
      </Typography>
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Post;
