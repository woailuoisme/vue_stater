<template>
    <div class="quantity-toggle">
        <v-btn
                :color="isDecrement ? 'error' : 'gray'"
                :disabled="!isDecrement"
                @click="decrement"
                icon
        >
            <v-icon>mdi-minus</v-icon>
        </v-btn>
        <input
                :readonly="readonly"
                @change="change"
                @keypress="onlyNumber($event)"
                @paste="paste"
                class="mx-1"
                ref="input"
                style="text-align:center;width: 50px;border:1px solid #378888"
                type="text"
                v-model="quantity"
        />
        <!--    {{ quantity }}-->
        <v-btn :color="isIncrement?'success':'gray'" :disabled="!isIncrement" @click="increment" icon>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
    const isNaN = Number.isNaN || window.isNaN;
    const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
    const REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;
    export default {
        props: {
            initQuantity: {
                type: Number,
                default: 1
            },
            item: Object,
            min: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            },
            readonly: Boolean,
            disabled: Boolean,
            inputtable: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            isDecrement() {
                return this.quantity > this.min;
            },
            isIncrement() {
                return this.quantity < this.max
            }
        },
        created() {
            this.setValue(Math.min(this.max, Math.max(this.min, this.initQuantity)));
        },
        data() {
            return {
                quantity: 1
            };
        },
        watch: {
            quantity(newValue) {
                this.$emit("input", newValue);
            }
        },
        methods: {
            increment() {
                this.setValue(Math.min(this.max, Math.max(this.min, (this.quantity + this.step))));
                this.$emit("increment", this.quantity, this.item);
            },
            decrement() {
                this.setValue(Math.min(this.max, Math.max(this.min, (this.quantity - this.step))));
                this.$emit("decrement", this.quantity, this.item);
            },

            change(event) {
                this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)));
                this.$emit("change-quantity", this.quantity, this.item);
            },
            /**
             * Paste event handler.
             * @param {Event} event - Event object.
             */
            paste(event) {
                const clipboardData = event.clipboardData || window.clipboardData;

                if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
                    event.preventDefault();
                }
            },

            setValue(newValue) {
                const oldValue = this.quantity;
                if (this.min <= this.max) {
                    newValue = Math.min(this.max, Math.max(this.min, newValue));
                }
                this.quantity = newValue;
                this.$emit("change-value", newValue, oldValue);
            },
            onlyNumber($event) {
                //console.log($event.keyCode); //keyCodes value
                let keyCode = $event.keyCode ? $event.keyCode : $event.which;
                if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
                    // 46 is dot
                    $event.preventDefault();
                }
            }
        }
    };
</script>

<style scoped></style>
