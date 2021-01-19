<template>
    <v-container fluid>
        <go-back/>
        <v-card class="rounded-lg" elevation="5">
            <v-card-title class="primary--text">
                Richiedi rimborso
            </v-card-title>
            <stepper-refund-request></stepper-refund-request>
        </v-card>
    </v-container>
</template>

<script>
import StepperRefundRequest from "@/components/StepperRefundRequest";
import GoBack from "@/components/GoBack";

export default {
    components: {
        GoBack,
        StepperRefundRequest
    },
}
</script>
