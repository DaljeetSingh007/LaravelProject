<template>
    <strong><span v-text="currentTime"></span></strong>
</template>
<script>
import moment from 'moment-timezone';

export default {
    props: ['propsTimezone'],
    data() {
        return {
            timezone: this.propsTimezone,
            currentTime: 'Loading...',
        }
    },
    methods:{
        updateCurrentTime() {
            this.currentTime = moment().tz(this.timezone).format('LTS');
        },
    },
    created() {
        this.currentTime = moment().format('LTS');
        setInterval(() => this.updateCurrentTime(), 1 * 1000);
    }
}
</script>

