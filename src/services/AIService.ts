
import {streamText} from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model:openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system:'Eres un bartender que tiene 40 años de experiencia ',
        })

        return result.textStream
    }
}