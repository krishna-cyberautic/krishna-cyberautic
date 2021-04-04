import { Table,Space,Button} from 'antd';
import React from 'react';
import {PostDetail} from './postDetail';
import {useHistory} from '../history';
export const ShowData = ({data}) => {
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Url',
          dataIndex: 'url',
          key: 'url',
        },
        {
          title: 'Created_at',
          dataIndex: 'created_at',
          key: 'created_at',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
          },
          {
            title: 'Action',
            key: 'action',
            render:(record) => (
              <Space size="middle">
                  <Button type="primary" onClick={()=>{
                   useHistory.push('/view',data=record.hits)
                
                  }}>View</Button>
                
              </Space>
            ),
          },
    ];
    return (
        <>
          {
            data.hits?(
          <Table columns={columns} dataSource={data.hits}/> 
            )
          :(
           <p>Loading...</p>   
          )
        }    
        </>
    )
}
