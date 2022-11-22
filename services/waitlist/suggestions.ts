import axios from 'axios'; 

export async function getSuggestions(query:string){
    if(!query) {
        return undefined
    } else {
        const AUTOCOMPLETE_API = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
        const res = await axios.get(AUTOCOMPLETE_API)
        return res.data       
    }
}