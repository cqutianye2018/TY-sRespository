import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Routers from './router.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Start from './components/start.vue';
import './style.css';
import painting_data from './paintings.js';
import music_data from './musics/古风/antiquityMusics.js';
import Viewer from 'v-viewer';
import iView from 'iview';
import 'viewerjs/dist/viewer.css';
import 'iview/dist/styles/iview.css';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(iView);	
Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
});



const RouterConfig={
	mode:'history',
	routes:Routers
};
const router=new VueRouter(RouterConfig);

router.beforeEach((to,from,next)=>{
	window.document.title=to.meta.title;
	next();
});
router.afterEach((to,from,next)=>{
	window.scrollTo(0,0);
});
function getFilterArray(array){
	const res=[];
	const json={};
	for(let i=0;i<array.length;i++){
		const _self=array[i];
		if(!json[_self]){      //这里的_self即为作者名字，如果json[aaa]为undefined,则 !json[aaa]为true,将该aaa添加进res，并给json[aaa]赋值为1；
			res.push(_self);   //如果后面有重复的作者名字，则!json[aaa]为false,就不会再讲aaa添加进res，这样可以过滤掉重复的作者名字
			json[_self]=1;
		}
	}
	return res;
};
const store=new Vuex.Store({
	state:{
		paintingList:[],
		musicList:[],
		user:{
			
		},
		reqLogin:false,
		isLogined:false,     //登录状态
		cartList:[],        //购物车中的商品列表
		settlingOrder:[],
		payingOrder:[],
		payingList:[],
		seckillList:[]      //秒杀中的商品列表
	},
	mutations:{
		setReqLogin(state,data){
			state.reqLogin=data;
		},
		setPaintingList(state,data){
			state.paintingList=data;
		},
		setUser(state,data){
			state.user=data;
		},
		setLogined(state,data){
			
			state.isLogined=data;
		},
		setCart(state,data){
			state.cartList=data;
		},
		setSettlingOrder(state,data){
			state.settlingOrder=data;
		},
		setPayingOrder(state,data){
			state.payingOrder=data;
		},
		setPayingList(state,data){
			state.payingList=data;
		},
		setSeckillList(state,data){
			state.seckillList=data;
		},
		addCart(state,data){
			const isAdded=state.cartList.find(item=>item.id==data.id);
			if(isAdded){
				isAdded.count+=data.count;
			}else{
				state.cartList.push(data);
			}
		},
        editCartCount(state,payload){
			const goods=state.cartList.find(item=>item.id==payload.id);
			goods.count+=payload.count;
		},
		deleteCart(state,data){
			const index=state.cartList.findIndex(item=>item.id==data);
			state.cartList.splice(index,1);
		}
	},
	getters:{
		authors:(state)=>{
			const authors=state.paintingList.map(item=>item.author);
			return getFilterArray(authors);
		},
		worksNames:(state)=>{
			const worksnames=state.paintingList.map(item=>item.worksName);
			return worksnames;
		},
		
	},
	actions:{
		getPaintingList(context,data){
			setTimeout(()=>{
				context.commit('setPaintingList',painting_data)
			},500)
		},
		getMusicList(context,data){
			setTimeout(()=>{
				context.commit('setMusicList',music_data)
			},500)
		}
	},
//	plugins: [createPersistedState({
//    storage: window.sessionStorage
//})]
});
var vm=new Vue({
	el:"#start",
	router:router,
	store:store,
	render:h=>h(Start)
});
