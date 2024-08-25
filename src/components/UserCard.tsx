import { Space, Card } from "antd"
import '../styles/userCard.css';
import { GlobalOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";

function UserCard({user}: any) {
    const {name = null, avatar_url, location} = user || {};

    return (
    <Space direction="vertical" size={16} >
        <Card className="card">
         <UserAddOutlined  className="like"/>
           <div className="user">
              <img className="user__photo" src={avatar_url} alt="user photo"/>
              <div className="user__info">
                 <h1><UserOutlined /> {name ?? 'N/A'}</h1>
                 <p><GlobalOutlined style={{marginRight: '5px'}}/>{location ?? 'N/A'}</p>
              </div>
           </div>
        </Card>
    </Space>
    )
}

export { UserCard }