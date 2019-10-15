<template>
    <div id="main">
        <Header title="喵喵影院"/>
        <TabBar/>
    </div>
</template>

<script type="text/ecmascript-6">
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    export default {
        name: "Cinema",
        components: {
            Header,
            TabBar
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
