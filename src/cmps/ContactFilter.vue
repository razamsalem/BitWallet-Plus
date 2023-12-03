<template>
    <section class="contact-filter">
        <input @input="onFilterBy" v-model="filterBy.txt" type="text" placeholder="Search contacts">
    </section>
</template>
  
<script>
export default {
    data() {
        return {
            filterBy: {
                txt: "",
            },
        }
    },
    methods: {
        onFilterBy() {
            this.$emit('set-filter', this.filterBy)
        }
    }
};
</script>
  
<style lang="scss">
.contact-filter {
    margin-block-end: 20px;
    input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #232323;
        border-radius: 8px;

        &:focus {
            outline: none;
        }
    }
}
</style>