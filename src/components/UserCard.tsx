import { Space, Card } from "antd"
import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { UserModel } from "../core/interfaces/user-model";
import '../styles/userCard.css';

interface userCardModel {
    userData: UserModel,
    Icon: any
}

function UserCard({ userData, Icon }: userCardModel) {
    const { avatar_url, name, location } = userData;

    return (
        <Space direction="vertical" size={16} >
            <Card className="card">
                {Icon}
                <div className="user">
                    <img className="user__photo" src={avatar_url} alt="user photo" />
                    <div className="user__info">
                        <h1><UserOutlined /> {name ?? 'N/A'}</h1>
                        <p><GlobalOutlined style={{ marginRight: '5px' }} />{location ?? 'N/A'}</p>
                    </div>
                </div>
            </Card>
        </Space>
    )
}

export { UserCard }