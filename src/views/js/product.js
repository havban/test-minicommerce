
import { mapActions} from 'vuex'

export default {
    name: 'Product',
    computed: {
        productId(){
            return this.$route.params.product_id
        }
    },
    created() {
        this.getProduct({
            id: this.productId
        })
    },
    methods: {
        ...mapActions([
            'getProduct'
        ]),
        beli() {
            return this.$router.push('/cart')
        }
    }
}
