import { SearchTab } from './components/SearchTab'
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { FavoritesTab } from './components/FavoritesTab';
import './App.css'

const tabsComponent = [
  {
    name: 'Search',
    icon: <SearchOutlined />,
    children: <SearchTab />
  },
  {
    name: 'Favorites',
    icon: <UserOutlined />,
    children: <FavoritesTab />
  }
]

function App() {

  return (
    <main>
      <Tabs
        defaultActiveKey="1"
        items={tabsComponent.map(({ name, icon, children }, i) => {
          const id = String(i + 1);
          return {
            key: id,
            label: name,
            children,
            icon,
          };
        })}
      />
    </main>
  )
}

export default App
