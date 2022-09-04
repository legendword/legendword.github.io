<template>
    <div class="main">
        <div class="section flex-column-center">
            <div id="main-title" class="main-title">Legendword Open Source</div>
        </div>
        <div class="sidebar-nav">
            
        </div>
        <div class="section">
        </div>
    </div>
</template>

<script>
import ScrollBasedAnimation from '../helpers/ScrollBasedAnimation';

export default {
    name: 'IndexPage',
    data() {
        return {
            sba: new ScrollBasedAnimation([
                {
                    id: 'main-title',
                    from: 0,
                    to: 50,
                    values: {
                        fontSize: {
                            from: 3,
                            to: 2.4,
                            unit: 'rem'
                        },
                        opacity: {
                            from: 1,
                            to: 0
                        }
                    }
                }
            ])
        }
    },
    methods: {

    },
    mounted() {
        this.sba.create();
        console.log(this.sba.value);
    },
    beforeUnmount() {
        this.sba.destroy();
    }
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}

.section {
    width: 100%;
    height: 100vh;
}

.flex-column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.main-title {
    font-size: 3rem;
    text-align: center;
}
</style>