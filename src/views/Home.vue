<template>
    <div class="home">
        <BlogSlider />
        <div class="home__content">
            <AdsCard />
            <div class="home__content__blogs">
                <div class="home__content__blogs__heading">
                    <h3>Latest Post</h3>
                </div>
                <div class="home__content__blogs__layout">
                    <Blogs/>
                </div>
                <button class="home__content__blogs__button">View All Post</button>
            </div>
            <AdsCard />
        </div>
    </div>
</template>
<script setup>
import Blogs from '../components/Blogs'
import AdsCard from '../components/AdsCard'
import BlogSlider from '../components/BlogSlider'

</script>
<style lang="scss">
.home{
    display: flex;
    flex-direction: column;
    gap:80px;
    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:32px;
        &__blogs{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            &__heading{
                width: 100%;
                font-weight: 700;
                padding-left: 14px;
                color: #181A2A;
            }
            &__button{
                font-family: "Work Sans", sans-serif;
                font-size: 15px;
                font-weight: 500;
                line-height: 24px;
                word-break: break-word;
                width: 142px;
                height: 48px;
                padding: 12px 20px 12px 20px;
                border-radius: 6px;
                border: 1px solid rgba(105, 106, 117, 0.3);
                color: #696A75;
                background-color: #ffffff;
                cursor: pointer;
                &:hover{
                    background-color: rgba(105, 106, 117, 0.3);
                    border: 1px solid #ffffff;
                    color: #ffffff;
                    transition: all .2s;
                }
            }
        }
    }
}
</style>