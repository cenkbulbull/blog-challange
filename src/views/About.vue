<template>
    <div class="about">
        <AuthorInfoCard/>
        <div class="about__blogs">
            <div class="about__blogs__heading">
                <h3>Latest Post</h3>
            </div>
            <Blogs/>
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
    &__blogs{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:32px;
        &__heading{
            width: 100%;
            font-weight: 700;
            padding-left: 14px;
            color: #181A2A;
        }
    }
}
</style>