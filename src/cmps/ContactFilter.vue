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
  
<style lang="scss"></style>