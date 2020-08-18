<template>
    <div class="main">
        <div class="sidebar">
            <SideBarComponent />
        </div>
        <div class="content-right">
            <div class="navbar">
                <NavBarComponent />
            </div>
            <div class="pages">
                z
            </div>
        </div>
    </div>
</template>

<script>
    import SideBarComponent from "./components/SidebarComponent";
    import NavBarComponent from "./components/NavbarComponent";

    export default{
        
        name: 'DashboardComponent',
        components:{
            SideBarComponent,
            NavBarComponent
        }
    }
</script>


<style  lang="scss" src="./style.scss" scoped>
</style>