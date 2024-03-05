<script>
export default {
    name: 'Slider',
    data() {
        return {
            images: [
                '/src/src/image/avatar/avatar0.jpg',
                '/src/src/image/avatar/avatar1.jpg',
                '/src/src/image/avatar/avatar2.jpg',
                '/src/src/image/avatar/avatar3.jpg'
            ],
            index: 0
        };
    },
    methods: {
        prevSlide() {
            this.index = (this.index === 0) ? this.images.length - 1 : this.index - 1;
            this.$emit('update', `/src/src/image/avatar/avatar${this.index}.jpg`);
        },
        nextSlide() {
            this.index = (this.index === this.images.length - 1) ? 0 : this.index + 1;
            this.$emit('update', `/src/src/image/avatar/avatar${this.index}.jpg`);
        }
    },
};
</script>
<template>
    <div class="slider-container">
        <div class="slider" :style="{ transform: 'translateX(' + -index * 100 + '%)' }">
        <div class="slide" v-for="(image, idx) in images" :key="idx">
            <img :src="image" alt="slide">
        </div>
        </div>
        <button class="prev" @click="prevSlide">&#10094;</button>
        <button class="next" @click="nextSlide">&#10095;</button>
    </div>
</template>


<style scoped>
.slider-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
}

.slider {
    display: flex;
}

.slide {
    flex: 0 0 100%;
}

img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    border: none;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}
</style>

