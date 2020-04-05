<template>
  <v-container>
    <v-row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-col xl="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col xl="5" sm="4" md="3">
                <v-img :src="meetup.imageUrl" height="130px"></v-img>
              </v-col>
              <v-col xl="7" sm="8" md="9">
                <v-card-text class="primary">
                  <div>
                    <h5 class="white--text mb-0">{{ meetup.title }}</h5>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="info" text :to="'/meetups/' + meetup.id">
                    <v-icon left light>arrow_forward</v-icon>View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
    //    meetups() {
    //   return ...mapGetters("loadedMeetups")
    // },
    // ...mapGetters("loadedMeetups")
  }
};
</script>
