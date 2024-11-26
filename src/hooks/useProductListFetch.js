import { ref, computed } from 'vue';
export default function useProductListFetch(){
    const loading=ref(true)
    const productsRef = ref([])
    const error = ref('')
    const errorState = ref(false)

    const fetchData = async ()=>{
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            errorState.value=false
            if (!response.ok) {
              error.value = await response.json().catch(() => ( response.status));
              throw new Error(error.value || `HTTP error! status: ${response.status}`);
            }
        
            productsRef.value = await response.json();
            loading.value = false
          }catch(e){
            error.value = e;
            console.error('Error fetching data:', e.value);
            loading.value = false
            errorState.value=true
          }
    }
    fetchData()
    return{loading, productsRef,error,errorState, fetchData}
} 