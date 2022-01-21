import React, { useState } from "react"
import axios from "axios";
import { Button, FormControl, Input, Select, Stack, Textarea } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'
import { useEffect } from "react";

export const PostPage = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() =>  {
        getPostsData();
    },[])

    const getPostsData = () => {
        axios
            .get('api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }
    return (
        <>
            <h1>Post Page</h1>
            <Stack spacing={3}>
                <FormControl>
                <Input variant='outline' placeholder='タイトル' />
                <Select placeholder='カテゴリーを選択'>
                <option value='option1'>家庭</option>
                <option value='option2'>生活</option>
                <option value='option3'>仕事</option>
                <option value='option4'>お金</option>
                <option value='option5'>人間関係</option>
                <option value='option6'>その他</option>
            </Select>
                <Textarea placeholder='内容'  />
                <Button>投稿</Button>
                </FormControl>
            </Stack>
            
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>タイトル</Th>
                            <Th>カテゴリー</Th>
                            <Th>内容</Th>
                            <Th>作成日</Th>
                        </Tr>
                    </Thead>
                <Tbody>
                    {posts.map((post) => (
                        <Tr key={post.id}>
                            <Td>{post.title}</Td>
                            <Td>{post.category}</Td>
                            <Td>{post.content}</Td>
                            <Td>{post.created_at}</Td>
                        <Button>削除</Button>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </>
    )
}
