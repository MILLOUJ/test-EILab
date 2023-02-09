<template>
    <div class="TEST">
        <LayoutHeader></LayoutHeader>
        <LHCheckbox></LHCheckbox>
        <LHCheckbox></LHCheckbox>
    </div>
</template>

<script>
import LayoutHeader from '../components/LayoutHeader'
import LHCheckbox from '../components/LHCheckbox'
export default {
    name: 'Layout',
    components: {
        LayoutHeader,
        LHCheckbox
    }
}
</script>