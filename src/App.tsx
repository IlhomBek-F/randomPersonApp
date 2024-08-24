import { SearchTab } from './components/SearchTab'
import { PopularTab } from './components/PopularTab'
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import './App.css'

const tabsComponent = [
  {
    name: 'Search',
    icon: <SearchOutlined />,
    children: <SearchTab />
  },
  {
    name: 'Popular',
    icon: <UserOutlined />,
    children: <PopularTab />
  }
]

function App() {

  return (
     <Tabs
       defaultActiveKey="1"
       items={tabsComponent.map(({name, icon, children}, i) => {
         const id = String(i + 1);
         return {
           key: id,
           label: name,
           children,
           icon,
        };
      })}
     />
  )
}

export default App
