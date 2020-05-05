<template>
    <v-responsive :aspect-ratio="16 / 9" class="mx-auto">
        <video-player :options="playerOptions"
                      :playsinline="false"
                      @canplay="onPlayerCanplay($event)"
                      @canplaythrough="onPlayerCanplaythrough($event)"
                      @ended="onPlayerEnded($event)"
                      @loadeddata="onPlayerLoadeddata($event)"
                      @pause="onPlayerPause($event)"
                      @play="onPlayerPlay($event)"
                      @playing="onPlayerPlaying($event)"
                      @ready="playerReadied"
                      @statechanged="playerStateChanged($event)"
                      @timeupdate="onPlayerTimeupdate($event)"
                      @waiting="onPlayerWaiting($event)"
                      class="video-player-box vjs-big-play-centered"
                      ref="videoPlayer">
        </video-player>
    </v-responsive>
</template>

<script>
    import "video.js/dist/video-js.css";
    import {videoPlayer} from "vue-video-player";

    export default {
        components: {
            videoPlayer
        },
        data() {
            return {
                // videojs options
                playerOptions: {
                    height: '360',
                    fluid: true,
                    autoplay: false,
                    controls: true,
                    controlBar: {
                        // 隐藏重播图标
                        playToggle: {
                            replay: false
                        },
                        // 竖直的音量控制
                        volumePanel: {
                            inline: false
                        },
                        // 隐藏播放进度控制
                        progressControl: true
                    },
                    muted: true,
                    language: 'en',
                    loop: false,
                    preload: 'auto',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        // mp4
                        src: "http://vjs.zencdn.net/v/oceans.mp4",
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "/static/images/logo.png",
                }
            }
        },
        mounted() {
            // console.log('this is current player instance object', this.player)
            setTimeout(() => {
                console.log('dynamic change options', this.player)
                // change src
                // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
                // change item
                // this.$set(this.playerOptions.sources, 0, {
                //   type: "video/mp4",
                //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
                // })
                // change array
                // this.playerOptions.sources = [{
                //   type: "video/mp4",
                //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
                // }]
                this.player.muted(false)
            }, 5000)
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            onPlayerEnded(player) {
                // console.log('player ended!', player)
            },
            onPlayerLoadeddata(player) {
                // console.log('player Loadeddata!', player)
            },
            onPlayerWaiting(player) {
                // console.log('player Waiting!', player)
            },
            onPlayerPlaying(player) {
                // console.log('player Playing!', player)
            },
            onPlayerTimeupdate(player) {
                // console.log('player Timeupdate!', player.currentTime())
            },
            onPlayerCanplay(player) {
                // console.log('player Canplay!', player)
            },
            onPlayerCanplaythrough(player) {
                // console.log('player Canplaythrough!', player)
            },
            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
                // seek to 10s
                console.log('example player 1 readied', player)
                player.currentTime(10)
                // console.log('example 01: the player is readied', player)
            }
        }
    };
</script>

<style scoped></style>
