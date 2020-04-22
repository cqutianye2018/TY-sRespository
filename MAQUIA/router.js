import Music from './components/music.vue';
import Cart from './components/cart.vue';
import userOrder from './components/userOrder.vue';
import shopHome from './components/shop_home.vue';
import typeContent from './components/goodsTypeContent.vue';
import goodsDetail from './components/goodsDetail.vue';
import orderSettlement from './components/orderSettlement.vue';
import payOrder from './components/payOrder.vue';
const routers=[
	{
		path:'/shop',
		meta:{
			title:'首页'
		},
		component:(resolve)=>require(['./components/home.vue'],resolve),
		children:[
		    {
		    	path:'/shop/home',meta:{title:'商城首页'},component:shopHome
		    },
		    {
		    	path:'/shop/cart',meta:{title:'购物车'},component:Cart
		    },
		    {
		    	path:'/shop/order',meta:{title:'用户订单页'},component:userOrder
		    },
		    {
		    	path:'/shop/type:id',meta:{title:'分类详情页'},component:typeContent
		    },
		    {
		    	path:'/shop/goods:id',meta:{title:'商品详情页'},component:goodsDetail
		    },
		    {
		    	path:'/shop/settleOrder',meta:{title:'订单结算页'},component:orderSettlement
		    },
		    {
		    	path:'/shop/payOrder',meta:{title:'订单支付页'},component:payOrder
		    },
		    {
		    	path:'/',
		    	redirect:'/shop/home'
		    }
		]
	},
	{
        path:'/MAQUIA',
		meta:{
			title:'朝花夕誓'
		},
		component:(resolve)=>require(['./components/MAQUIAintro.vue'],resolve)
	},
	{
		path:'/MovieNav',
		meta:{
			title:'电影'
		},
		component:(resolve)=>require(['./components/MovieNavigation.vue'],resolve)
	},
	{
		path:'/painting',
		meta:{
			title:'原画'
		},
		component:(resolve)=>require(['./components/painting.vue'],resolve)
	},
	{
		path:'/music',
		meta:{
			title:'音乐'
		},
//		component:(resolve)=>require(['./views/music.vue'],resolve)
        component:Music
	},
	{
		path:'/msg-board',
		meta:{
			title:'留言板'
		},
		component:(resolve)=>require(['./components/messageBoard.vue'],resolve)
	},
	{
		path:'/person',
		meta:{
			title:'用户个人中心'
		},
		component:(resolve)=>require(['./components/UserDataBase.vue'],resolve)
	},
	{
		path:'/order',
		meta:{
			title:'用户订单页'
		},
		component:(resolve)=>require(['./components/userOrder.vue'],resolve)
	},
	{
		path:'/cart',
		meta:{
			title:'购物车'
		},
		component:(resolve)=>require(['./components/cart.vue'],resolve)
	},
	{
		path:'/painting/:id',
		meta:{
			title:'作品详情'
		},
		component:(resolve)=>require(['./components/paintingDetails.vue'],resolve)
	},
	{
		path:'*',
		redirect:'/shop/home'
	},
	
];
export default routers;
