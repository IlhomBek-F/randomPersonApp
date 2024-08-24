import { Space, Card } from "antd"
import '../styles/userCard.css';
import { UserAddOutlined } from "@ant-design/icons";

function UserCard({user}: any) {
    const {name = null, avatar_url, location} = user || {};
    console.log(user)
    return (
    <Space direction="vertical" size={16} >
        <Card className="card">
         <UserAddOutlined  className="like"/>
           <div className="user">
              <img className="user__photo" src={avatar_url} alt="user photo"/>
              <div className="user__info">
                 <h1>{name ?? 'N/A'}</h1>
                 <p>{location}</p>
              </div>
           </div>
        </Card>
    </Space>
    )
}

export { UserCard }