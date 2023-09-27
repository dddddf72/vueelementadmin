import Vue from 'vue'
import '../assets/element-ui-theme/theme/index.css'
import{
    Button,
    Row,
    Carousel,
    CarouselItem,
    Menu,
    MenuItem,
    Submenu,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,
    Tabs,
    TabPane,
    MessageBox,
    Message,
    Checkbox,
    CheckboxGroup,
    InputNumber,
    Input,
    Form,
    FormItem
}from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(InputNumber)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
// Message = function(msg){
//     Message({...msg,duration:1000})
// }