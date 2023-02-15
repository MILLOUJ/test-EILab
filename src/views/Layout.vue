<template>
    <div class="TEST">
        <LayoutHeader></LayoutHeader>
        <LHCheckbox></LHCheckbox>
        <LHCheckbox_sec></LHCheckbox_sec>
    </div>
</template>

<script>
import LayoutHeader from '../components/LayoutHeader'
import LHCheckbox from '../components/LHCheckbox'
import LHCheckbox_sec from '../components/LHCheckbox_sec'

export default {
    name: 'Layout',
    components: {
        LayoutHeader,
        LHCheckbox,
        LHCheckbox_sec
    }
}
</script>