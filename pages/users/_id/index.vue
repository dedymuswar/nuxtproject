<template>
    <h1 class="text-2xl">Single User with ID : {{$route.params.id}}</h1>
</template>

<script>
export default {
    validate (data) {
        // Validasi parameter dari request params
        return /^\d+$/.test(data.params.id)
    },
    layout: 'users'
}
</script>
