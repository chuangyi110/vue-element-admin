import Layout from '@/layout/index'

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: '/goods/goodsIndex',
  name: 'GoodsManagement',
  meta: {
    title: 'goodsManagement',
    icon: 'el-icon-goods',
    roles: ['RL_ADMIN']
  },
  children: [
    {
      path: 'goodsIndex',
      component: () => import('@/views/goods/goods-index'),
      name: 'GoodsIndex',
      meta: {
        title: 'goodsIndex',
        roles: ['RL_ADMIN']
      }
    },
    {
      path: 'goodsMaintenance',
      component: () => import('@/views/goods/goods-maintenance'),
      name: 'GoodsMaintenance',
      meta: {
        title: 'goodsMaintenance',
        roles: ['RL_ADMIN']
      }
    },
    {
      path: 'spec',
      component: () => import('@/views/permission/page'),
      name: 'GoodsSpec',
      meta: {
        title: 'goodsSpec',
        roles: ['RL_ADMIN']
      }
    },
    {
      path: 'brand',
      component: () => import('@/views/permission/page'),
      name: 'GoodsBrand',
      meta: {
        title: 'goodsBrand',
        roles: ['RL_ADMIN']
      }
    },
    {
      path: 'classify',
      component: () => import('@/views/permission/page'),
      name: 'GoodsClassify',
      meta: {
        title: 'goodsClassify',
        roles: ['RL_ADMIN']
      }
    },
    {
      path: 'other',
      component: () => import('@/views/permission/page'),
      name: 'GoodsOther',
      meta: {
        title: 'goodsOther',
        roles: ['RL_ADMIN']
      }
    },
    {
      path: 'logs',
      component: () => import('@/views/permission/page'),
      name: 'GoodsLogs',
      meta: {
        title: 'goodsLogs',
        roles: ['RL_ADMIN']
      }
    }
  ]
}
export default goodsRouter
