<template>
    <main class="view-template">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="body">
            <slot name="body"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </main>
</template>

<script   setup>

</script>

<style lang="scss" scoped>
.view-template{
    padding-top:calc($header-height + 4vh);
   display: flex;
   flex-direction: column;
   min-height: 100vh;
}

.header{
    padding: 2rem 0; 
}

.footer{
    padding : 3rem  0;
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-top: auto;
     
}
</style>