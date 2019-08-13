<template>
  <div id="app">
    <Menu>
      <template v-for="menu in menuList">
        <MenuItem :key="menu.title" v-if="!menu.children">
          {{menu.title}}
        </MenuItem>
        <ReSubMenu :key="menu.title" v-else :data="menu"></ReSubMenu>
      </template>
    </Menu>
  </div>

  <!-- <Menu>
      <SubMenu>
        <template #title>
          菜单1
        </template>
        <MenuItem>
          <SubMenu>
            <template #title>
              菜单1-1
            </template>
            <MenuItem>菜单1-1-1</MenuItem>
            <MenuItem>菜单1-1-2</MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>菜单1-2</MenuItem>
      </SubMenu>
    </Menu> -->
</template>

<script>
import Menu from "_v/MenuComponent/Menu.vue"
import MenuItem from "_v/MenuComponent/MenuItem.vue"
import SubMenu from "_v/MenuComponent/SubMenu.vue"
import ReSubMenu from "_v/MenuComponent/ReSubMenu.vue"
export default{
  data(){
    return{
      menuList:[
        {
          title:"菜单1",
          children:[
            {
              title:"菜单1-1",
              children:[
                {title:"菜单1-1-1"},
                {title:"菜单1-1-2"},
                {title:"菜单1-1-3"}
              ]
            },
            {
              title:"菜单1-2",
            }
          ]
        },
        {
          title:"菜单2"
        },
        {
          title:"菜单3"
        }
      ]
    }
  },
  components:{
    Menu,MenuItem,SubMenu,ReSubMenu
  }
}
</script>

<style>
</style>
