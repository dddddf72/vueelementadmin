import Vue from 'vue';

import { 
  Button,
  Message,
  Row,
  Col,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  MessageBox,
  Pagination,
  Table,
  TableColumn,
  Form,
  FormItem,
  Switch,
  Input,
  InputNumber,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Alert,
  Steps,
  Step,
  TabPane,
  Tabs,
  Upload,
  Dialog,
  Loading
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Alert)
Vue.use(Steps)
Vue.use(Step)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;