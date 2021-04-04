import React from 'react'
import {Card} from 'antd';
import {useLocation} from 'react-router-dom';
export const PostDetail = () => {
 const location = useLocation();
  const data = location.state.record;
console.log(data.created_at);
    return (
        <div className="site-card-border-less-wrapper">
    <Card title="Card title" style={{ width: 300 }}>
      
          <p> <h1>Title</h1>:{data.title}</p>
          <p> <h1>createAt</h1>:{data.created_at}</p>
          <p> <h1>url</h1>:{data.url}</p>
      
      
    </Card>
  </div>
    )
}
