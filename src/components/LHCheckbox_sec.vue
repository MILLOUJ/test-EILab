<template>
    <div class="container">
        <div class="second_form">
            <input class="second_form_input" type="checkbox" id="check_sec">
            <label for="check_sec">Создайте сотрудника</label>
            <button class="second_form_input-btn"><span class="second_form_input-btn-text">Перейти</span></button>
        </div>
        <div class="second_description">Сотрудник - это человек, который будет проходить обучение. Вы можете пропустить этот
            шаг, если хотите протестировать систему самостоятельно.
        </div>
    </div>
</template>

<script>
export default {
    name: 'LHCheckbox_sec'
}
</script>