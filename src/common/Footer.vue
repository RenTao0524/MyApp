<template>
    <mu-paper>
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange" class = "footer">
            <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
            <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
            <mu-bottom-nav-item value="books" title="Books" icon="books"/>
            <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
            <mu-bottom-nav-item value="person" title="Person" icon="person"/>
        </mu-bottom-nav>
    </mu-paper>
</template>

<script>
    export default {
        data () {
            return {
                bottomNav: 'movies'
        }
    },
    methods: {
        handleChange (val) {
            this.bottomNav = val
        }
    }
}
</script>

<style lang="less">
    .footer{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        background-color: #ff9800;
    }
</style>