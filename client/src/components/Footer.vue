<template>
    <div class="footer">

        <section class="body">
            <nav>
               <RouterLink to="">International</RouterLink>
               <span>|</span>
               <RouterLink to="">Open Jobs</RouterLink>
               <span>|</span>
               <RouterLink to="">Complaints</RouterLink>
            </nav>

            <div class="payment-methods">
                <img src="/images/icons/mastercard_payment.svg" alt="Payment method">
                <img src="/images/icons/visa_payment.svg" alt="Payment method">
                <img src="/images/icons/google_pay_payment.svg" alt="Payment method">
                <img src="/images/icons/apple_pay_payment.svg" alt="Payment method">

            </div>
        </section>

        <div class="signature">
            <RouterLink to="">Disclaimer</RouterLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer{
    padding-top: 2rem;
    @include global-padd;
    background-color: $black-4pct;
    
    & nav{
        display: flex;
        justify-content: center;
        gap: 0.4rem;
    }

    
}

.payment-methods{
    margin:  0 auto;
    width: fit-content;
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
}

.signature{
    padding-top: 2rem;
    text-align: center;
    padding-bottom: 2rem;
}
</style>