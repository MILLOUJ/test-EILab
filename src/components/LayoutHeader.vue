<template>
    <div class="header">
        <div class="header_container">
            <div class="header_container-statistic">
                <img class="header_container-statistic-img" src="../assets/images/1.svg" alt="">
                <p class="header_container-statistic-text">Отчетов сформировано</p>
                <p class="header_container-statistic-count">10600</p>
            </div>
            <div class="header_container-statistic">
                <img class="header_container-statistic-img" src="../assets/images/2.svg" alt="">
                <p class="header_container-statistic-text">Численность работников</p>
                <p class="header_container-statistic-count">13783</p>
            </div>
            <div class="header_container-statistic">
                <img class="header_container-statistic-img" src="../assets/images/3.svg" alt="">
                <p class="header_container-statistic-text">Колличество групп</p>
                <p class="header_container-statistic-count">737</p>
            </div>
        </div>
    </div>
    <hr>
    <LHCheckbox></LHCheckbox>
    <LHCheckbox></LHCheckbox>
</template>

<script>
import LHCheckbox from './LHCheckbox.vue'
export default {
    name: 'LayoutHeader',
    components: {
        LHCheckbox
    }
}
</script>