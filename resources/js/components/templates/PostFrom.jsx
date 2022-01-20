import { Input, Select, Textarea } from "@chakra-ui/react";
import React, { ReactNode, VFC } from "react";

export const PostFrom = (props) => {

    const { data, inputChange } = props;
console.log(data)
    return (
        <form>
            <Input placeholder='タイトル'name="title" value={data.title} onChange={inputChange}/>
            <Select placeholder='カテゴリーを選択してください' name="category" value={data.category}>
                <option value='家庭'>家庭</option>
                <option value='生活'>生活</option>
                <option value='仕事'>仕事</option>
                <option value='お金'>お金</option>
                <option value='人間関係'>人間関係</option>
                <option value=''>その他</option>
            </Select> 
            <Textarea placeholder='内容' name="content" value={data.content}/>
            <button>投稿</button>
        </form>
    )
}
