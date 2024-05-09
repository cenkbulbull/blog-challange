<template>
    <div class="about">
        <div class="about__header">
            <AuthorInfoCard/>
        </div>
        <div class="about__blogs">
            <div class="about__heading">
                <h3>Latest Post</h3>
            </div>
            <div class="about__content">
                <Blogs/>
            </div>
        </div>
    </div>
</template>

<script setup>
import AuthorInfoCard from '@/components/AuthorInfoCard.vue';
import Blogs from '@/components/Blogs.vue';
</script>

<style lang="scss">
.about{
    display: flex;
    flex-direction: column;
    gap:48px;

    &__header{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    &__blogs{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:32px;
    }
    
    &__heading{
        width: 100%;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        padding-left: 14px;
        color: #181A2A;
    }    
    
    &__content{
        display: flex;
        gap: 20px;
    }
}
</style>