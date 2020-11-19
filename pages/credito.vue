<template>
  <v-app>
    <template>
      <v-container fluid>
        <v-row justify="space-around">
          <v-card
            color="transparent"
            flat
          >
            <v-card-title>
              <v-avatar size="56">
                <img
                  alt="user"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                >
              </v-avatar>
              <p class="ml-3 mt-3">
                John Doe
              </p>
            </v-card-title>
            <card-credito></card-credito>
            <p class="headline mt-5">Crediti</p>
            <card-crediti></card-crediti>
          </v-card>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>


<script>
import CardCredito from "@/components/cardCredito";
import CardCrediti from "@/components/cardCrediti";
export default {
  layout: 'default',
  components: {
    CardCrediti,
    CardCredito,
  }
}
</script>
