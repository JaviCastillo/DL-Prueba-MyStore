import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/views/Login.vue'
import VueRouter from 'vue-router'
import myRoutes from "./mocks/routes"

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter(myRoutes)

describe('Pruebas vista Login.vue', () => {

    it('Muestra error si credenciales de acceso son falsas ', () => {
      const wrapper = shallowMount(Login,{
          propsData: {
              credentials: {
                  email: '',
                  password: ''
              },
              formHasErrors: false
          }
      })
      let e =  { preventDefault: () => {} }
      wrapper.vm.login(e)
      expect(wrapper.vm.$data.formHasErrors).toEqual(true)
    }),
  
    it('Formulario redirecciona a /home si logueo exitoso  ', () => {
      const wrapper = shallowMount(Login,{
          localVue,
          router
      })
      wrapper.setData({ 
          credentials: {
              email: 'user1@mystore.com',
              password: 'password'
          }, 
      })
      let e =  { preventDefault: () => {} }
      wrapper.vm.login(e)
  
      expect(wrapper.vm.$data.formHasErrors).toEqual(false)
      expect(wrapper.vm.$route.path).toEqual('/')
  
    })
    
  })