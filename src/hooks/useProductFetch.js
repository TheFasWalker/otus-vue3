import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default function useProductFetch(itemId) {
    const route = useRoute();
    const itemIdComputed = computed(() => parseInt(itemId.value)); // Ensure itemId is a number
    const productRef = ref(null);
    const loading = ref(true);
    const error = ref('');
    const errorState = ref(false);
    const itemRaiting = ref({});

    const fetchData = async () => {
        loading.value = true;
        error.value = '';
        errorState.value = false;
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${itemIdComputed.value}`);
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.status }));
                error.value = errorData.message || `HTTP error! status: ${response.status}`;
                throw new Error(error.value);
            }
            productRef.value = await response.json();
            itemRaiting.value = productRef.value.rating;
            // console.log(productRef.value)
        } catch (e) {
            error.value = e.message;
            errorState.value = true;
        } finally {
            loading.value = false;
        }
    };
    fetchData()
    return { productRef, loading, error, itemRaiting, errorState, fetchData };
}