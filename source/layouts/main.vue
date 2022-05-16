<script setup>
</script>

<template>
    <div>
        <!--
        <div class="header">
            <div class="site-title">
                <a href="https://legendword.github.io/" style="text-decoration: none; color: inherit;">Legendword <span class="grey">Open Source</span></a>
            </div>
            <div class="site-nav">
                <a href="https://legendword.github.io/projects" style="text-decoration: none; color: inherit;">Projects</a>
            </div>
        </div>
        -->
        <slot></slot>
    </div>
</template>

<style>
.header {
    height: 80px;
    line-height: 80px;
    padding-left: max( 20px, 5vw );
    font-size: 24px;
    display: flex;
    justify-content: flex-start;
    gap: max( 20px, 5vw );
}
.site-title {
    font-weight: 500;
}
.site-nav {
    font-size: 20px;
}
.grey {
    color: grey;
}
</style>